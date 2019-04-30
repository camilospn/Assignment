/**
 * ==============================
 * Your Javascript Code Goes Here
 * ==============================
 **/

'use strict';
/* global Monogatari */
/* global monogatari */

const { $_ready } = Monogatari;

$_ready (() => {
	monogatari.init ('#monogatari');
	$_('#monogatari [data-menu="main"]').prepend ('<h1>Monogatari 101</h1>');
	$_('#monogatari [data-ui="inner-menu"]').toggleClass ('vertical horizontal');
	$_('#monogatari [data-ui="inner-menu"]').toggleClass ('vertical--right horizontal--center');
});