/*************************
       REST API CALLS
 *************************/
/*************************
          GITHUB
 *************************/
function get_github_org_name(org = "notpointless") {
    return fetch('https://api.github.com/orgs/' + org, {
        method: 'GET',
    })
        .then(response => response.json())
        .then(data => {
            ORG_NAME = data.name
            return data.name;
        });
}