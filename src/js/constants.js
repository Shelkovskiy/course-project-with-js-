export const BOARD_1_KEY = 'BOARD_1';
export const BOARD_2_KEY = 'BOARD_2';
export const BOARD_3_KEY = 'BOARD_3';
export const cardToLocal_1 = JSON.parse(localStorage.getItem(BOARD_1_KEY)) ;
export const cardToLocal_2 = JSON.parse(localStorage.getItem(BOARD_2_KEY)) ;
export const cardToLocal_3 = JSON.parse(localStorage.getItem(BOARD_3_KEY)) ;
export const btn_1 = document.getElementById('board-1')
export const btn_2 = document.getElementById('board-2')
export const btn_3 = document.getElementById('board-3')
export const main_str = document.getElementById('main-str')

