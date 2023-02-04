/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

/**
 * Search function
 */

const searchInput = document.querySelector("#searchbar > input")
const searchButton = document.querySelector("#searchbar > button")

const lookup = {"/":"/","deepl":"https://deepl.com/","reddit":"https://reddit.com/","maps":"https://maps.google.com/"}
const engine = "google"
const engineUrls = {
  deepl: "https://www.deepl.com/translator#-/-/",
  duckduckgo: "https://duckduckgo.com/?q=",
  ecosia: "https://www.ecosia.org/search?q=",
  google: "https://www.google.com/search?q=",
  startpage: "https://www.startpage.com/search?q=",
  youtube: "https://www.youtube.com/results?q=",
}

const isWebUrl = value => {
  try {
    const url = new URL(value)
    return url.protocol === "http:" || url.protocol === "https:"
  } catch {
    return false
  }
}

const getTargetUrl = value => {
  if (isWebUrl(value)) return value
  if (lookup[value]) return lookup[value]
  return engineUrls[engine] + value
}

const search = () => {
  const value = searchInput.value
  const targetUrl = getTargetUrl(value)
  window.open(targetUrl, "_self")
}

searchInput.onkeyup = event => event.key === "Enter" && search()
searchButton.onclick = search

/**
 * inject bookmarks into html
 */

const bookmarks = [{"id":"SIQq7QMMyyDs47Di","label":"Social","bookmarks":[{"id":"KAXH5mCJ1wFWa7c9","label":"YouTube","url":"https://www.youtube.com"},{"id":"BpwnTDSmzbhbchp5","label":"Twitter","url":"https://twitter.com/home"},{"id":"glA7dLn132hBKeo2","label":"Instagram","url":"https://www.instagram.com"},{"id":"h2M8kiFdbyUStQM7","label":"Reddit","url":"https://www.reddit.com/"}]},{"id":"SNfYjez1EzkmGZr3","label":"Design","bookmarks":[{"id":"A4mv9AcbfhBVJzAp","label":"Pinterest","url":"https://www.pinterest.com"},{"id":"5vwhSVHYAQIbQvS2","label":"Behance","url":"https://www.behance.net"},{"id":"NOcEzzBX7DeC7odb","label":"Haikei","url":"https://app.haikei.app/"},{"id":"Gtxp3nbunC9A6NpT","label":"Gradients","url":"https://larsenwork.com/easing-gradients/"}]},{"id":"VDxyVMlA8BDOjULC","label":"worth reading","bookmarks":[{"id":"iPAvalcS32QuHXQd","label":"Books","url":"https://www.pdfdrive.com/rich-dad-poor-dad-e136494023.html"},{"id":"vcYQ6N1HDLblCh15","label":"Manga","url":"https://3asq.org"}]},{"id":"s7mKsKWO2poM866k","label":"sources","bookmarks":[{"id":"fOlhPtTNOyXDST3s","label":"GitHub","url":"https://github.com/"},{"id":"rzkY4SyRPxtMXjIR","label":"W3schools","url":"https://www.w3schools.com/"},{"id":"feuV5j7WQAVXviu2","label":"Notion","url":"https://www.notion.so"}]},{"id":"fDTExHP6oJdIhWgr","label":"Other","bookmarks":[{"id":"OlFqoUdYXbTJ5HVe","label":"ChatGbt","url":"https://chat.openai.com/chat"},{"id":"VgEVGHg88sYzDtQy","label":"VirusTotal","url":"https://www.virustotal.com/gui/home/url"},{"id":"tKcKRwLBcbjZ8wgd","label":"Chess","url":"https://www.chess.com/home"},{"id":"Nybpol6ZxUqphv20","label":"Translate","url":"https://translate.google.com"}]}]

const createGroupContainer = () => {
  const container = document.createElement("div")
  container.className = "bookmark-group"
  return container
}

const createGroupTitle = title => {
  const h2 = document.createElement("h2")
  h2.innerHTML = title
  return h2
}

const createBookmark = ({ label, url }) => {
  const li = document.createElement("li")
  const a = document.createElement("a")
  a.href = url
  a.innerHTML = label
  li.append(a)
  return li
}

const createBookmarkList = bookmarks => {
  const ul = document.createElement("ul")
  bookmarks.map(createBookmark).forEach(li => ul.append(li))
  return ul
}

const createGroup = ({ label, bookmarks }) => {
  const container = createGroupContainer()
  const title = createGroupTitle(label)
  const bookmarkList = createBookmarkList(bookmarks)
  container.append(title)
  container.append(bookmarkList)
  return container
}

const injectBookmarks = () => {
  const bookmarksContainer = document.getElementById("bookmarks")
  bookmarksContainer.append()
  bookmarks.map(createGroup).forEach(group => bookmarksContainer.append(group))
}

injectBookmarks()
