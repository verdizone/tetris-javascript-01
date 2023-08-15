// import {date} from "./date.js"


document.addEventListener('DOMContentLoaded', ()=>{
    const width = 10;
    const grid = document.querySelector('.grid');
    let squares = Array.from(document.querySelectorAll('.grid div'));
    console.log(squares);
    const ScoreDisplay = document.querySelector('#score')
    const StartBtn = document.querySelector('#start-button')

    
    //The Tetrominoes

    const lTetromino = [
        [1, width+1, width*2+1, 2],
        [width, width+1, width+2, width*2+2],
        [1, width+1, width*2+1, width*2],
        [width, width*2, width*2+1, width*2+2]  
    ]

    const zTetromino = [
        [width*2, width+1, width*2+1, width+2],
        [0, width, width+1, width*2+1],
        [width*2, width+1, width*2+1, width+2],
        [0, width, width+1, width*2+1]
    ]

    const tTetromino = [
        [width, 1, width+1, width+2],
        [1, width+1, width*2+1, width+2],
        [width, width+1, width*2+1, width+2],
        [width, 1, width+1, width*2+1]
    ]

    const oTetromino = [
        [0, 1, width, width+1],
        [0, 1, width, width+1],
        [0, 1, width, width+1],
        [0, 1, width, width+1]
    ]
    
    const iTetromino = [
        [width, width+1, width+2, width+3],
        [1, width+1, width*2+1, width*3+1],
        [width, width+1, width+2, width+3],
        [1, width+1, width*2+1, width*3+1],

    ]

    const theTetrominoes = [lTetromino, zTetromino, tTetromino, oTetromino, iTetromino];

    let currentPosition = 4
    let current = theTetrominoes[1][0];

    // console.log(current);

    //Draw this with forEach so we can see the current array
    
    function draw(){
        current.forEach(index=>{
            squares[currentPosition + index].classList.add('tetromino')
        })

    }
    draw()


})