
<script>
function toggleNews() {
    const content = document.getElementById('newsContent');
    const toggle = document.getElementById('newsToggle');
    
    if (content.classList.contains('expanded')) {
        content.classList.remove('expanded');
        toggle.classList.remove('expanded');
    } else {
        content.classList.add('expanded');
        toggle.classList.add('expanded');
    }
}
</script>