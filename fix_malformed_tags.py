#!/usr/bin/env python3
"""
Fix malformed JSX tags created by aggressive regex replacement.
Specifically fixes patterns like <div}} or <button}}} etc.
"""

import re
import os
import glob

def fix_malformed_tags(content):
    """Fix all malformed JSX tags."""

    # Fix opening tags with trailing }} like <div}}, <button}}}}
    # Pattern: <tagname followed by }} (not preceded by proper closing >)
    tags = ['div', 'section', 'article', 'button', 'a', 'li', 'p', 'span',
            'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'ul', 'ol', 'nav', 'header', 'footer']

    for tag in tags:
        # Fix <tag}}...> patterns (opening tags with extra braces before >)
        content = re.sub(rf'<{tag}\}}+', f'<{tag}', content)

    # Fix className template literals missing closing }
    # Pattern: className={`...`  (without closing })
    content = re.sub(r"className=\{\`([^`]+)\`(?!\})", r"className={`\1`}", content)

    # Fix any remaining excessive braces at line endings
    content = re.sub(r'\}\}+\s*$', '', content, flags=re.MULTILINE)

    return content

def process_file(filepath):
    """Process a single file."""
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            original_content = f.read()

        new_content = fix_malformed_tags(original_content)

        if new_content != original_content:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"✓ Fixed {os.path.basename(filepath)}")
            return 1
        return 0

    except Exception as e:
        print(f"✗ Error processing {filepath}: {e}")
        return 0

def main():
    """Fix all TypeScript/React files."""
    src_dir = "/Users/pothamsettyk/Projects/Pricko-Website/src"

    files_fixed = 0
    total_files = 0

    print("Fixing malformed JSX tags...\n")

    # Process all .tsx files recursively
    for filepath in glob.glob(f"{src_dir}/**/*.tsx", recursive=True):
        total_files += 1
        files_fixed += process_file(filepath)

    print(f"\n{'='*60}")
    print(f"MALFORMED TAG FIX COMPLETE")
    print(f"{'='*60}")
    print(f"Total files scanned: {total_files}")
    print(f"Files fixed: {files_fixed}")
    print(f"{'='*60}\n")

if __name__ == "__main__":
    main()
