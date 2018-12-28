
const $collapseButton = $('#collapse-side-bar');
const $sideBar = $('#side-bar');
const $tableContainer = $('#table-container');

/* Collapse and reveal sidebar on button click */
$collapseButton.on('click', () => {
    setTimeout(() => {
        $tableContainer.toggleClass('display-none');
    }, $sideBar.hasClass('hide') ? 600 : 0);

    $sideBar.toggleClass('hide');
});

/* Collapse and reveal sidebar using media query */
const mediaQuery = window.matchMedia('(max-width: 768px)');
mediaQuery.addListener(e => {
    if(e.matches) {
        $tableContainer.addClass('display-none');
        $sideBar.addClass('hide');
        $collapseButton.prop('disabled', true);
    }
    else {
        $sideBar.removeClass('hide');
        $tableContainer.removeClass('display-none');
        $collapseButton.prop('disabled', false);
    }
});


const sideBar = document.getElementById('side-bar');

// sideBar.addEventListener('transitionend', e => {
//     console.log('Transition started!');
//     if(e.propertyName === 'flex-grow') {
//         if(!$sideBar.hasClass('hide')) {
//             $tableContainer.addClass('display-none');
//         }
//         else {
//             $tableContainer.removeClass('display-none');
//         }
//     }
// })



/*
LEDGER TABLE
*/
const dataset = [['john', 1, 2],['peter', 1, 2]];

$('#ledger').DataTable({
    data: dataset,
    columns: [
        {title: 'Name'},
        {title: 'Age'},
        {title: 'Teeth'}
    ],
    paging: false,
    info: false,
    searching: false
});
