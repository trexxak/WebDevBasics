let i = 5000;

function timedCount() {
  i --;
  postMessage(i);
  setTimeout("timedCount()",0);
}

timedCount();