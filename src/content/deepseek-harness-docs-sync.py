#!/usr/bin/env python3
"""
下载并解压 deepseek-harness-docs 仓库 main 分支的 zip 归档，
并将内容解压(替换)到脚本所在目录下的子文件夹 deepseek-harness-docs/ 中。

说明:
- 只会影响 ./deepseek-harness-docs 这一个子文件夹，不会删除或改动
  src/content 下的其他目录(如 blog/、resources/)与文件。
- 每次运行会先清空该子文件夹，再解压最新内容。

用法:
    python sync-docs.py [子文件夹名称]

若未指定，默认使用 "deepseek-harness-docs"。
"""

import os
import sys
import io
import shutil
import zipfile
import tempfile
import urllib.request

ZIP_URL = "https://github.com/anghunk/deepseek-harness-docs/archive/refs/heads/main.zip"
# GitHub 归档 zip 解压后的统一根目录名
ARCHIVE_ROOT = "deepseek-harness-docs-main"


def download(url: str) -> bytes:
    """下载 zip 数据并返回字节内容。"""
    print(f"正在下载: {url}")
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
    with urllib.request.urlopen(req) as resp:
        data = resp.read()
    print(f"下载完成，大小: {len(data)} 字节")
    return data


def extract_to_subdir(zip_bytes: bytes, base_dir: str, sub_name: str) -> None:
    """将归档内容解压到 base_dir/sub_name 子文件夹，覆盖该子文件夹原有内容。"""
    target_dir = os.path.join(base_dir, sub_name)
    os.makedirs(target_dir, exist_ok=True)

    with zipfile.ZipFile(io.BytesIO(zip_bytes)) as zf:
        names = zf.namelist()
        if not names or not names[0].startswith(ARCHIVE_ROOT + "/"):
            raise RuntimeError(
                f"归档结构不符合预期：未找到根目录 '{ARCHIVE_ROOT}/'"
            )

        # 先清空子文件夹原有内容
        print(f"清空子文件夹: {target_dir}")
        for name in os.listdir(target_dir):
            path = os.path.join(target_dir, name)
            if os.path.isdir(path) and not os.path.islink(path):
                shutil.rmtree(path)
            else:
                os.remove(path)

        # 解压到临时目录，再把根目录内的内容移动到目标子文件夹
        tmp_parent = tempfile.mkdtemp(prefix="dsh_sync_")
        try:
            tmp_root = os.path.join(tmp_parent, ARCHIVE_ROOT)
            zf.extractall(tmp_parent)
            for name in os.listdir(tmp_root):
                src = os.path.join(tmp_root, name)
                dst = os.path.join(target_dir, name)
                if os.path.exists(dst):
                    if os.path.isdir(dst) and not os.path.islink(dst):
                        shutil.rmtree(dst)
                    else:
                        os.remove(dst)
                shutil.move(src, dst)
        finally:
            shutil.rmtree(tmp_parent, ignore_errors=True)

    # 解压完成后，删除不需要的文件/目录
    remove_after_sync = [
        "scripts",
        ".github",
        ".vitepress",
        "package.json",
        ".gitignore",
        ".gitattributes",
        "LASTUPDATED-ISSUE.md",
        "SYNC-LOGIC-REFERENCE.md",
        "ds-logo.svg",
        "README.md",
        "index.md"
    ]
    for rel in remove_after_sync:
        path = os.path.join(target_dir, rel)
        if os.path.isdir(path) and not os.path.islink(path):
            shutil.rmtree(path)
            print(f"已删除目录: {rel}")
        elif os.path.exists(path):
            os.remove(path)
            print(f"已删除文件: {rel}")

    print(f"已解压到: {target_dir}")


def main() -> None:
    base_dir = os.path.dirname(os.path.abspath(__file__))
    sub_name = sys.argv[1] if len(sys.argv) > 1 else "deepseek-harness-docs"

    zip_bytes = download(ZIP_URL)
    extract_to_subdir(zip_bytes, base_dir, sub_name)
    print("完成。")


if __name__ == "__main__":
    main()
