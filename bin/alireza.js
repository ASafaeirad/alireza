#!/usr/bin/env node

const { default: chalk } = require('chalk');
const ascii = require('./ascii');
const clear = require('console-clear');
const ui = require('cliui')();

const name = chalk.bold('Alireza');
const github = link('https://github.com/frontendmonster');
const linkedin = link('https://www.linkedin.com/in/alireza-safaierad-388921122');
const resume = link('https://github.com/frontendmonster/resume');
const titles = ['Software Engineer', 'Web Developer', 'UI/UX Designer', 'INTP']
  .map(t => title(t))
  .join(' | ');

// const sepTop = '┌────────────┐';
const sepTop = '┌             ┐';
const sepBot = '└             ┘';

const about =
  'I have +13 years of programming experience, and +5 years of professional experience working with medium to large databases, managed technical project as technical lead.';

function main() {
  clear(true);
  console.log();
  // printAscii();
  printHeader();
  printTitles();
  printResume();
  printContact();
  console.log(ui.toString());
}

function printAbout() {
  center(about);
}

function printAscii() {
  console.log(ascii);
}

function printTitles() {
  center(titles);
}

function printHeader() {
  center(`Hi 👋, My name is ${name}.`);
}

function printResume() {
  heading(`About me`);
  printAbout();
  contact(`📖 My CV`, resume);
}

function printContact() {
  heading(`Contact me`);
  contact(`Github`, github);
  contact(`Linkedin`, linkedin);
}

function link(str) {
  return chalk.cyan(str);
}

function contact(label, value) {
  ui.div({
    text: label,
    align: 'center',
  });
  ui.div({
    text: chalk.bold(value),
    align: 'center',
    padding: [0, 0, 1, 0],
  });
}

function left(str) {
  ui.div({
    text: str,
    align: 'left',
    padding: [0, 5, 1, 5],
  });
}

function title(str) {
  return chalk.bold(str);
}

function heading(str) {
  ui.div({
    text: sepTop,
    align: 'center',
    padding: [0, 0, 0, 0],
  });
  ui.div({
    text: chalk.bold(str),
    align: 'center',
  });
  ui.div({
    text: sepBot,
    align: 'center',
    padding: [0, 0, 1, 0],
  });
}

function center(str) {
  ui.div({
    text: str,
    align: 'center',
    padding: [0, 0, 1, 0],
  });
}

main();
