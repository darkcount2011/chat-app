import * as sapper from '@sapper/app';

sapper.start({
	target: document.querySelector('#sapper')
});
function lintError() {
    console.log("this should not be seen");
  }