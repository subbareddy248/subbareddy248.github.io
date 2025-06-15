document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('publication-search');
    const yearFilter = document.getElementById('year-filter');
    const venueFilter = document.getElementById('venue-filter');
    const publications = document.querySelectorAll('.publication-item');
    const resultCount = document.getElementById('result-count');

    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            clearTimeout(timeout);
            timeout = setTimeout(() => func(...args), wait);
        };
    }

    function filterPublications() {
        const searchTerm = searchInput.value.toLowerCase();
        const selectedYear = yearFilter.value;
        const selectedVenue = venueFilter.value.toLowerCase();
        let visibleCount = 0;

        publications.forEach(pub => {
            const title = pub.querySelector('.publication-title')?.textContent.toLowerCase() || '';
            const authors = pub.querySelector('.publication-authors')?.textContent.toLowerCase() || '';
            const venueText = pub.querySelector('.publication-venue')?.textContent.toLowerCase() || '';
            const year = pub.getAttribute('data-year') || '';
            const venueAttr = pub.getAttribute('data-venue')?.toLowerCase() || '';

            const matchesSearch =
                !searchTerm ||
                title.includes(searchTerm) ||
                authors.includes(searchTerm) ||
                venueText.includes(searchTerm);

            const matchesYear = selectedYear === 'all' || year === selectedYear;
            const matchesVenue = selectedVenue === 'all' || venueAttr.includes(selectedVenue);

            const isVisible = matchesSearch && matchesYear && matchesVenue;
            pub.style.display = isVisible ? 'block' : 'none';
            if (isVisible) visibleCount++;
        });

        resultCount.textContent = `Showing ${visibleCount} publication${visibleCount !== 1 ? 's' : ''}`;
    }

    if (searchInput) {
        searchInput.addEventListener('input', debounce(filterPublications, 300));
    }
    if (yearFilter) {
        yearFilter.addEventListener('change', filterPublications);
    }
    if (venueFilter) {
        venueFilter.addEventListener('change', filterPublications);
    }

    // Initial run
    filterPublications();
});
