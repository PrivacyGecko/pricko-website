#!/usr/bin/env python3
"""
Comprehensive fix for ALL missing closing braces in JSX attributes.
"""

import re
import os
import glob

def fix_all_missing_braces(content):
    """Fix all missing closing braces."""

    lines = content.split('\n')
    fixed_lines = []

    for i, line in enumerate(lines):
        fixed_line = line

        # Fix style attributes missing closing }}
        # Pattern: style={{ ... } (missing one })
        if 'style={{' in fixed_line and fixed_line.count('{') > fixed_line.count('}'):
            # Count braces in this line
            open_braces = fixed_line.count('{')
            close_braces = fixed_line.count('}')
            diff = open_braces - close_braces

            # If line ends without proper closing, add missing braces
            if diff > 0 and not fixed_line.rstrip().endswith('}}'):
                # Add missing closing braces at end of line
                fixed_line = fixed_line.rstrip() + ('}' * diff)

        # Fix className template literals missing closing }
        # Pattern: className={`...` (without closing })
        if 'className={`' in fixed_line:
            # Check if it has matching closing }
            match = re.search(r'className=\{`([^`]*)`(?!\})', fixed_line)
            if match:
                fixed_line = re.sub(r'className=\{`([^`]*)`(?!\})', r'className={`\1`}', fixed_line)

        fixed_lines.append(fixed_line)

    return '\n'.join(fixed_lines)

def process_file(filepath):
    """Process a single file."""
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            original_content = f.read()

        new_content = fix_all_missing_braces(original_content)

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

    print("Fixing missing closing braces...\n")

    # Process all .tsx files recursively
    for filepath in glob.glob(f"{src_dir}/**/*.tsx", recursive=True):
        total_files += 1
        files_fixed += process_file(filepath)

    print(f"\n{'='*60}")
    print(f"BRACE FIX COMPLETE")
    print(f"{'='*60}")
    print(f"Total files scanned: {total_files}")
    print(f"Files fixed: {files_fixed}")
    print(f"{'='*60}\n")

if __name__ == "__main__":
    main()
