 var dictionary = [" "];

  function addWord() {
    var word1 = document.getElementById("add").value;
    dictionary.push(word1);
  }

  function searchWord() {
    var word2 = document.getElementById("search").value;
    var found = 0;
    for (var i = 0; i < dictionary.length; ++i) {
      if (word2.match(dictionary[i])) {
        found = 1;
      }
    }

    if (found == 1) {
      alert("The word \"" + word2 + "\"  it`s already in dictionary!");
    } else {
      alert("The word \"" + word2 + "\"  it`s not  in dictionary!");
    }
    return false;
  }