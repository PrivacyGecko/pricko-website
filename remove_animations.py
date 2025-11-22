#!/usr/bin/env python3
"""
Batch remove Framer Motion animations from React/TypeScript files.
Converts motion.* to standard HTML elements and removes animation props.
"""

import re
import os
import sys

def remove_framer_motion(content):
    """Remove Framer Motion imports and convert motion.* to HTML elements."""

    # Remove framer-motion imports
    content = re.sub(
        r"import\s+\{[^}]*\}\s+from\s+['\"]framer-motion['\"];?\n?",
        "",
        content
    )
    content = re.sub(
        r"import\s+\{\s*motion\s*,\s*AnimatePresence\s*\}\s+from\s+['\"]framer-motion['\"];?\n?",
        "",
        content
    )
    content = re.sub(
        r"import\s+\{\s*AnimatePresence\s*,\s*motion\s*\}\s+from\s+['\"]framer-motion['\"];?\n?",
        "",
        content
    )
    content = re.sub(
        r"import\s+\{\s*motion\s*\}\s+from\s+['\"]framer-motion['\"];?\n?",
        "",
        content
    )
    content = re.sub(
        r"import\s+\{\s*AnimatePresence\s*\}\s+from\s+['\"]framer-motion['\"];?\n?",
        "",
        content
    )

    # Remove AnimatePresence wrapper (keep content)
    content = re.sub(
        r"<AnimatePresence[^>]*>\s*",
        "",
        content
    )
    content = re.sub(
        r"</AnimatePresence>",
        "",
        content
    )

    # Convert motion.div to div
    content = re.sub(r"<motion\.div", "<div", content)
    content = re.sub(r"</motion\.div>", "</div>", content)

    # Convert motion.section to section
    content = re.sub(r"<motion\.section", "<section", content)
    content = re.sub(r"</motion\.section>", "</section>", content)

    # Convert motion.button to button
    content = re.sub(r"<motion\.button", "<button", content)
    content = re.sub(r"</motion\.button>", "</button>", content)

    # Convert motion.a to a
    content = re.sub(r"<motion\.a", "<a", content)
    content = re.sub(r"</motion\.a>", "</a>", content)

    # Convert motion.li to li
    content = re.sub(r"<motion\.li", "<li", content)
    content = re.sub(r"</motion\.li>", "</li>", content)

    # Convert motion.h1 to h1
    content = re.sub(r"<motion\.h1", "<h1", content)
    content = re.sub(r"</motion\.h1>", "</h1>", content)

    # Convert motion.h2 to h2
    content = re.sub(r"<motion\.h2", "<h2", content)
    content = re.sub(r"</motion\.h2>", "</h2>", content)

    # Convert motion.h3 to h3
    content = re.sub(r"<motion\.h3", "<h3", content)
    content = re.sub(r"</motion\.h3>", "</h3>", content)

    # Convert motion.p to p
    content = re.sub(r"<motion\.p", "<p", content)
    content = re.sub(r"</motion\.p>", "</p>", content)

    # Convert motion.span to span
    content = re.sub(r"<motion\.span", "<span", content)
    content = re.sub(r"</motion\.span>", "</span>", content)

    # Remove animation props (multi-line safe)
    animation_props = [
        r'\s*initial=\{[^}]+\}',
        r'\s*animate=\{[^}]+\}',
        r'\s*whileInView=\{[^}]+\}',
        r'\s*whileHover=\{[^}]+\}',
        r'\s*whileTap=\{[^}]+\}',
        r'\s*transition=\{[^}]+\}',
        r'\s*viewport=\{[^}]+\}',
        r'\s*variants=\{[^}]+\}',
        r'\s*custom=\{[^}]+\}',
        r'\s*exit=\{[^}]+\}',
        r'\s*initial="[^"]*"',
        r'\s*animate="[^"]*"',
        r'\s*whileInView="[^"]*"',
        r'\s*whileHover="[^"]*"',
        r'\s*whileTap="[^"]*"',
        r'\s*transition="[^"]*"',
    ]

    for prop in animation_props:
        content = re.sub(prop, '', content)

    # Remove delay prop from interfaces/types
    content = re.sub(r'\s*delay\?: number;?\n?', '\n', content)

    # Clean up multiple consecutive blank lines
    content = re.sub(r'\n\n\n+', '\n\n', content)

    return content

def process_file(filepath):
    """Process a single file."""
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            original_content = f.read()

        # Skip if no framer-motion import
        if 'framer-motion' not in original_content:
            return 0

        new_content = remove_framer_motion(original_content)

        # Count changes
        original_motion_count = original_content.count('motion.')
        new_motion_count = new_content.count('motion.')
        changes = original_motion_count - new_motion_count

        # Write back
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)

        print(f"✓ {os.path.basename(filepath)}: Removed {changes} animations")
        return changes

    except Exception as e:
        print(f"✗ Error processing {filepath}: {e}")
        return 0

def main():
    """Process all files with framer-motion imports."""
    src_dir = "/Users/pothamsettyk/Projects/Pricko-Website/src"

    # Files to process
    files_to_process = [
        "components/FAQSection.tsx",
        "components/product/ProductFAQ.tsx",
        "components/product/ProductPricing.tsx",
        "components/ProofOfDevelopment.tsx",
        "components/roadmap/PhaseCardSimple.tsx",
        "components/SocialProof.tsx",
        "components/ui/AnimatedCounter.tsx",
        "components/ui/DistributionBreakdown.tsx",
        "components/ui/FAQAccordion.tsx",
        "components/ui/GeckoCoreOGImage.tsx",
        "components/ui/NewsletterForm.tsx",
        "components/ui/PastMilestone.tsx",
        "components/ui/PremiumFeature.tsx",
        "components/ui/PricingComparisonTable.tsx",
        "components/ui/ProtocolArchitectureDiagram.tsx",
        "components/ui/ProtocolDisclaimer.tsx",
        "components/ui/ProtocolThemeTest.tsx",
        "components/ui/TeamMember.tsx",
        "components/ui/TestimonialCard.tsx",
        "components/ui/TokenFlowDiagram.tsx",
        "components/ui/ToolCard.tsx",
        "components/ui/TrustBadge.tsx",
        "components/ui/UtilityTierCard.tsx",
        "components/ui/UtilityTimeline.tsx",
        "components/ui/VestingTimeline.tsx",
        "pages/legal/ForwardLookingStatementsPage.tsx",
        "pages/legal/GeographicRestrictionsPage.tsx",
        "pages/legal/RiskDisclosurePage.tsx",
    ]

    # Note: AnimatedBackground.tsx is intentionally skipped (decorative only)

    total_changes = 0
    processed_files = 0

    print("Starting batch animation removal...\n")

    for file_path in files_to_process:
        full_path = os.path.join(src_dir, file_path)
        if os.path.exists(full_path):
            changes = process_file(full_path)
            if changes > 0:
                total_changes += changes
                processed_files += 1
        else:
            print(f"✗ File not found: {file_path}")

    print(f"\n{'='*60}")
    print(f"BATCH PROCESSING COMPLETE")
    print(f"{'='*60}")
    print(f"Files processed: {processed_files}")
    print(f"Total animations removed: {total_changes}")
    print(f"{'='*60}\n")

if __name__ == "__main__":
    main()
