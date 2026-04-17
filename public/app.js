const courseGrid = document.getElementById('courseGrid');
const streamFilter = document.getElementById('streamFilter');
const semesterFilter = document.getElementById('semesterFilter');
const semWrapper = document.getElementById('semWrapper');
const divider = document.getElementById('filterDivider');
const panicBtn = document.getElementById('panicToggle');
const searchInput = document.getElementById('searchInput');
const body = document.body;
const logo = document.getElementById('logo');

let panicActive = false;

// FETCH DATA FUNCTION
async function fetchCourses() {
    const stream = streamFilter.value;
    const sem = semesterFilter.value;
    const search = searchInput.value;
    
    // NOTE: We use a relative path /api/courses so it works on Render and Localhost automatically
    try {
        const response = await fetch(`/api/courses?stream=${stream}&semester=${sem}&panic=${panicActive}&search=${search}`);
        const data = await response.json();
        displayCourses(data);
    } catch (err) {
        console.error("Fetch error:", err);
    }
}

// DISPLAY FUNCTION
function displayCourses(courses) {
    courseGrid.innerHTML = '';
    if (courses.length === 0) {
        courseGrid.innerHTML = '<p class="col-span-full text-center text-gray-400 py-10 font-medium">No matching courses found. Try a different search!</p>';
        return;
    }
    courses.forEach(course => {
        courseGrid.innerHTML += `
            <div class="p-6 rounded-[2.5rem] border transition-all duration-300 ${panicActive ? 'bg-slate-800 border-slate-700 text-white shadow-none' : 'bg-white border-gray-100 shadow-xl shadow-gray-100/50'}">
                <div class="flex justify-between mb-4">
                    <span class="text-[9px] font-bold px-2 py-1 rounded-md ${course.type === 'free' ? 'bg-green-100 text-green-600' : 'bg-blue-100 text-blue-600'}">
                        ${course.type.toUpperCase()}
                    </span>
                    ${course.isPanicMode ? '<span class="text-[9px] bg-red-600 text-white px-2 py-1 rounded-md animate-pulse">🔥 ONE-SHOT</span>' : ''}
                </div>
                <h3 class="text-lg font-bold mb-1">${course.title}</h3>
                <p class="text-xs opacity-60 mb-6">${course.provider}</p>
                <div class="flex justify-between items-center">
                    <span class="text-xl font-bold">${course.type === 'paid' ? '₹' + (course.discountPrice || course.price) : 'FREE'}</span>
                    <a href="${course.link}" target="_blank" class="px-4 py-2 rounded-xl text-xs font-bold transition ${panicActive ? 'bg-red-600 text-white' : 'bg-gray-900 text-white hover:bg-blue-600'}">Access Now</a>
                </div>
            </div>`;
    });
}

// LISTENERS
searchInput.addEventListener('input', () => {
    clearTimeout(window.searchTimer);
    window.searchTimer = setTimeout(fetchCourses, 300);
});

streamFilter.addEventListener('change', () => {
    const stream = streamFilter.value;
    // Dynamic Filter Visibility
    if (stream === 'B.Tech' || stream === 'BCA') {
        semWrapper.style.display = 'flex';
        if(divider) divider.style.display = 'block';
    } else {
        semWrapper.style.display = 'none';
        if(divider) divider.style.display = 'none';
        semesterFilter.value = ""; 
    }
    fetchCourses();
});

panicBtn.addEventListener('click', () => {
    panicActive = !panicActive;
    body.classList.toggle('panic-active');
    const dot = panicBtn.querySelector('.dot');
    if (panicActive) {
        panicBtn.classList.replace('bg-gray-300', 'bg-red-600');
        dot.classList.add('translate-x-5');
        logo.innerText = "EduPanic!";
    } else {
        panicBtn.classList.replace('bg-red-600', 'bg-gray-300');
        dot.classList.remove('translate-x-5');
        logo.innerText = "EduFlow.";
    }
    fetchCourses();
});

semesterFilter.addEventListener('change', fetchCourses);

// Initial Load
fetchCourses();