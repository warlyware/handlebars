var context = {
  login: "cadenichols",
  id: 10618426,
  avatar_url: "https://avatars.githubusercontent.com/u/10618426?v=3",
  gravatar_id: "",
  url: "https://api.github.com/users/cadenichols",
  html_url: "https://github.com/cadenichols",
  followers_url: "https://api.github.com/users/cadenichols/followers",
  following_url: "https://api.github.com/users/cadenichols/following{/other_user}",
  gists_url: "https://api.github.com/users/cadenichols/gists{/gist_id}",
  starred_url: "https://api.github.com/users/cadenichols/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/cadenichols/subscriptions",
  organizations_url: "https://api.github.com/users/cadenichols/orgs",
  repos_url: "https://api.github.com/users/cadenichols/repos",
  events_url: "https://api.github.com/users/cadenichols/events{/privacy}",
  received_events_url: "https://api.github.com/users/cadenichols/received_events",
  type: "User",
  site_admin: false,
  name: "Cade Nichols",
  company: "",
  blog: "http://cadenichols.com",
  location: "Fremont, CA",
  email: "kerbinite+1@gmail.com",
  hireable: true,
  bio: null,
  public_repos: 31,
  public_gists: 0,
  followers: 8,
  following: 1,
  created_at: "2015-01-20T17:47:20Z",
  updated_at: "2015-06-18T00:20:27Z"
}



var source   = $("#entry-template").html();
var template = Handlebars.compile(source);
var html    = template(context);

$("body").append(html);