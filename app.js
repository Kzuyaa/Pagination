// const pages = document.querySelectorAll('.cards div');
// const bprev = document.getElementById('prev')
// const bnext = document.getElementById('next')
// let currentPage = 0;
// bprev.disabled = true;
// bprev.style.opacity = '0.5';
// function nextPage() {
//     currentPage = (currentPage + 1) % pages.length;
//     for (let i = 0; i < pages.length; i++) {
//         pages[i].style.display = 'none';
//         if (i === currentPage) {
//             bprev.disabled = false;
//             bprev.style.opacity = '1';
//             pages[i].style.display = 'flex'
//             if (i === 2) {
//                 bnext.disabled = true;
//                 bnext.style.opacity = '0.5';
//             }
//         }

//     }
//     console.log(currentPage);
// }

// function prevPage() {
//     currentPage = (currentPage - 1 + pages.length) % pages.length;

//     for (let i = 0; i < pages.length; i++) {
//         pages[i].style.display = 'none';

//         if (i === currentPage) {
//             bnext.disabled = false;
//             bnext.style.opacity = '1';
//             pages[i].style.display = 'flex'
//             if (i === 0) {
//                 bprev.disabled = true;
//                 bprev.style.opacity = '0.5';
//             }
//         }
//     }
//     console.log(currentPage);
// }

// function page1() {
//     bprev.disabled = true;
//     bprev.style.opacity = '0.5';
//     bnext.disabled = false;
//     bnext.style.opacity = '1';
//     pages[0].style.display = 'flex';
//     pages[1].style.display = 'none';
//     pages[2].style.display = 'none';
// }


// function page2() {
//     bprev.disabled = false;
//     bprev.style.opacity = '1';
//     bnext.disabled = false;
//     bnext.style.opacity = '1';
//     pages[1].style.display = 'flex';
//     pages[0].style.display = 'none';
//     pages[2].style.display = 'none';
// }

// function page3() {
//     bprev.disabled = false;
//     bprev.style.opacity = '1';
//     bnext.disabled = true;
//     bnext.style.opacity = '0.5';
//     pages[2].style.display = 'flex';
//     pages[0].style.display = 'none';
//     pages[1].style.display = 'none';
// }

const pages = document.querySelectorAll('.cards div');
const bprev = document.getElementById('prev');
const bnext = document.getElementById('next');
let currentPage = 0;

updateUI();

function updateUI() {
    pages.forEach((page, index) => {
        page.style.display = index === currentPage ? 'flex' : 'none';
    });

    bprev.disabled = currentPage === 0;
    bprev.style.opacity = currentPage === 0 ? '0.5' : '1';

    bnext.disabled = currentPage === pages.length - 1;
    bnext.style.opacity = currentPage === pages.length - 1 ? '0.5' : '1';
}

function nextPage() {
    if (currentPage < pages.length - 1) {
        currentPage++;
        updateUI();
    }
}

function prevPage() {
    if (currentPage > 0) {
        currentPage--;
        updateUI();
    }
}

function goToPage(index) {
    if (index >= 0 && index < pages.length) {
        currentPage = index;
        updateUI();
    }
}
