"use strict";
var Grid;
Grid = {
    currentSlots: [{ state: 'busy' }, { state: 'empty' }, { state: 'busy' }, { state: 'busy' }, { state: 'empty' }, { state: 'busy' }],
    numberOfColumns: 2
};
//This function is called at the beginning for initializing the grid
let onInit = () => Grid;
console.log(onInit());
//This function is called when the user wants to change the number of slots per row shown in the grid
let setNumberOfColumns = (newValue) => {
    if (newValue >= 1 && newValue <= 3) {
        return Grid.numberOfColumns = newValue;
    }
    else
        return new Error('number incorrect!');
};
console.log(setNumberOfColumns(3));
//This function should compute and return the total number of existing busy slots in the grid
let getNumberOfBusySlots = () => {
    let count = 0;
    for (let i = 0; i < Grid.currentSlots.length; i++) {
        if (Grid.currentSlots[i].state === 'busy')
            count++;
    }
    return count;
};
console.log(getNumberOfBusySlots());
//This function should compute and return the total number of existing empty slots in the grid
let getNumberOfEmptySlots = () => {
    let count = 0;
    for (let i = 0; i < Grid.currentSlots.length; i++) {
        if (Grid.currentSlots[i].state === 'empty')
            count++;
    }
    return count;
};
console.log(getNumberOfEmptySlots());
//This function is called when a slot is selected by the user and needs to be set to busy. The input variable 'index' is the position in the array of the selected slot.
let onSlotSelected = (index) => {
    if (Grid.currentSlots[index].state === 'busy')
        return 'the slot is already busy';
    else if (getNumberOfEmptySlots() <= 2)
        return 'maximum number of busy slots completed';
    else if (Grid.currentSlots[index].state === 'empty' && getNumberOfEmptySlots() >= 3) {
        Grid.currentSlots[index].state = 'busy';
    }
    return 'state changed';
};
console.log(onSlotSelected(1));
//This function is called when the user 'closes' a slot meaning that it won't be busy anymore until gets selected again. The input variable 'index' is the position in the array of the closed slot.
let onSlotClosed = (index) => {
    if (Grid.currentSlots[index].state === 'empty')
        return 'the slot is already empty';
    if (Grid.currentSlots[index].state === 'busy') {
        Grid.currentSlots[index].state = 'empty';
    }
    return 'state changed';
};
console.log(onSlotClosed(0));
//This function should compute and return the total number of existing slots in the grid;
let getTotalNumberOfSlots = () => {
    return Grid.currentSlots.length;
};
console.log(getTotalNumberOfSlots());
