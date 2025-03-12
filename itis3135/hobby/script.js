function showSection(sectionId) {
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {  // ✅ Parentheses added
        section.classList.remove('active');
    });

    const activeSection = document.getElementById(sectionId);
    if (activeSection) {  // ✅ Check if section exists to avoid errors
        activeSection.classList.add('active');
    } else {
        console.warn(`Section with ID '${sectionId}' not found.`);
    }
}