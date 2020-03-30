const emojiMap = sortedEmojiMap;

let regexs = new Map();
for (let word of emojiMap.keys()) {
  regexs.set(word, new RegExp(word, 'gi'));
}

function replaceText(node) {
  if (node.nodeType === Node.TEXT_NODE) {
    if (node.parentNode &&
      node.parentNode.nodeName === 'TEXTAREA') {
      return;
    }
    let content = node.textContent;
    for (let [word, emoji] of emojiMap) {
      const regex = regexs.get(word);
      content = content.replace(regex, emoji);
    }
    node.textContent = content;
  } else {
    for (let i = 0; i < node.childNodes.length; i++) {
      replaceText(node.childNodes[i]);
    }
  }
}

replaceText(document.body);

const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    if (mutation.addedNodes && mutation.addedNodes.length > 0) {
      for (let i = 0; i < mutation.addedNodes.length; i++) {
        const newNode = mutation.addedNodes[i];
        replaceText(newNode);
      }
    }
  });
});

observer.observe(document.body, {
  childList: true,
  subtree: true
});