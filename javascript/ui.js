class Ui {
    constructor() {
        this.show = document.querySelector('#show');
        // let currentalert = document.querySelector('.alert');
        // console.log(currentalert);
    }
    showprofile(info) {
        this.show.innerHTML = `
        <div class="card">
        <div class="card-body">
            <div class="row">
                <div class="col-3 m-auto">
                    <img class = "img-fluid " src="${info.avatar_url}" alt="image ">
                    <a href="${info.html_url}" target="_blank" class="btn btn-primary u-full-width ">View Profile</a>
                </div>
            </div>
            <hr>
            <div class="row">
                <div class="col-9 ">
                    <span class="badge bg-primary">Public Repos:${info.public_repos}</span>
                    <span class="badge bg-secondary">Public gist:${info.public_gists}</span>
                    <span class="badge bg-success">Followers:${info.followers}</span>
                    <span class="badge bg-dark">Following:${info.following}</span>
                </div>
            </div>
            <hr>

            <div class="row">
                <div class="col-9">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Email:${info.email}</li>
                <li class="list-group-item">Location:${info.location}</li>
                <li class="list-group-item">Member Since:${info.created_at}</li>
            </ul>
                </div>
            </div>
        </div>
    </div>`
    }


    

    showalert(message, classname) {
        this.show.innerHTML = ""
        // this.removealert();
        let div = document.createElement('div');
        div.className = `alert ${classname} `;
        let container = document.querySelector('.container');
        let showcard = document.querySelector('.showcard');
        div.appendChild(document.createTextNode(message));
        container.insertBefore(div, showcard);

        setTimeout(function () {
            document.querySelector('.alert').remove();
        }, 2000);  

    }

    // removealert(){
    //     let currentalert = document.querySelector('.alert');
    //     // console.log(currentalert);
    //     if(this.currentalert){   
    //         currentalert.remove();
    //     }
    // }

}