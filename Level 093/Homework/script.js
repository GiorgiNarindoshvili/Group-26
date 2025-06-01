const parent = document.getElementById("box1");
const form = document.querySelector("form");

const userData = []
async function getUser() {
    form.addEventListener('submit', async function (e) {
        e.preventDefault()
        const name1 = e.target.Github.value
        try {
            const fe = await fetch(`https://api.github.com/users/${name1}`)
            const data = await fe.json()
            userData[0] = data
            console.log(data)

            if (fe.ok === false){
                throw new Error("User not found")
            } else {
                userData.forEach(element => {
                    const date = new Date(element.created_at);
                    const options = { day: '2-digit', month: 'short', year: 'numeric' };
                    const formattedDate = date.toLocaleDateString('en-GB', options).replace(/ /g, ' ');
                    parent.innerHTML = `
            <div class = allinfo>
                <img src = "${element.avatar_url}" width = 90px>
                <div class = "allinfo2">
                    <h3>${element.login}</h3>
                    <p class = "joined">Joined ${formattedDate}</p>
                </div>
                <p class = "bio">${element.bio || "This Profile Has No Bio"}</p>
                <p class = "username">@${element.name || "No username"}
            </div>    
            <div class = "follos">
                    <div class = "repos">
                        <p>Repos</p>
                        <p>${element.public_repos}</p>
                    </div>
                    <div class = "followers">
                        <p>Followers</p>
                        <p>${element.followers}</p>
                    </div>
                    <div class = "following">
                        <p>Following</p>
                        <p>${element.following}</p>

                    </div>
                
                
            </div>
            <div class = "lowerdiv">
                    <div class = "location">
                        <img src = ${"/Homework/Image/icon-location.svg"} class = "imgloca">
                        <p>${element.location}</p>
                    </div>
                    <div class = "url">
                        <img src = ${"/Homework/Image/icon-website.svg"}> 
                        <p>${element.html_url}</p>
                    </div>
                    <div class = "twitter">
                        <img src = ${"/Homework/Image/icon-twitter.svg"}> 
                        <p>${element.twitter_username || "Not available"}</p>
                    </div>
                    <div class = "company">
                        <img src = ${"/Homework/Image/icon-company.svg"}>
                        <p>${element.company || "Not available"}
                    </div>
                        
            </div>
                
                
            
            `

                })
            }



        } catch (err) {
            parent.innerHTML = `
        <h1>User not found</h1>
        `
        }


    })
}
getUser()