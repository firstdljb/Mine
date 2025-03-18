if (!localStorage.token && localStorage.Spostid) {
    document.getElementById('editbtn').style.display = 'none';
    document.getElementById('deletebtn').style.display = 'none';
}
let EYE;
let avatar = document.getElementById('avatar');
let EyeMood = 'open';
let windowbackcover = document.getElementById('windowbackcover');
windowbackcover.style.background = getComputedStyle(document.body).backgroundColor;
let Message = document.getElementById('Message');
let Showsinglepost = document.getElementById('Showsinglepost');

async function GetPosts() {
    const app = await axios.get('https://tarmeezacademy.com/api/v1/posts');
    const result = await app;
    const all = result.data.data;
    postssback.innerHTML = '';
    for (let one of all) {
        let UserAvatar = JSON.stringify(one.author.profile_image);
        if (UserAvatar == '{}') {
            UserAvatar = 'https://photosnow.net/wp-content/uploads/2023/12/no-dp32.jpg';
        }else {
            UserAvatar = one.author.profile_image;
        }

        let UserPic = JSON.stringify(one.image);
        let PicMood;
        if (UserPic == '{}') {
            UserPic = 'https://igpa.uillinois.edu/wp-content/themes/igpa/dist/img/backgrounds/no_image.png';
            PicMood = 'cover';
        }else {
            UserPic = one.image;
            PicMood = 'cover';
        }

        let POST = `
         <div id="post" onclick="ShowSinglePostSid(${one.id})" style="cursor : pointer">
            <div id="pic" style="background : lightgray url('${UserPic}') no-repeat center center / ${PicMood}">
                <div id="tags">
                    <p>tags</p>
                    <p>tags</p>
                </div>
            </div>
                <div id="miniavatar" style="background : url('${UserAvatar}') no-repeat center center / cover"></div>
                <div id="miniusername">${one.author.username}</div>
                <div id="body">${one.body}</div>
                <div id="countcomments"> <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M120-240v-80h480v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg> 50,000 </div>
                <div id="countlikes"> <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="red"><path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z"/></svg> 50,000 </div>
                <div id="creatat">${one.created_at}</div>
        </div>
        `
        let postssback = document.getElementById('postssback');
        postssback.innerHTML += POST;

    }
}
GetPosts()

function EYEshowing(x) {
        const PASSINP = document.getElementById(x.id);
        console.log(x.id)
        if (x.id == 'Password-inp') {
            EYE = document.getElementById('login-passwordEYE');
        }else if (x.id == 'rigester-Password-inp'){
            EYE = document.getElementById('rigester-passwordEYE');
        }
        
    
    if (PASSINP.value.length > 0) {
        EYE.style.display = 'flex';
    }

    function openEYE() {
        PASSINP.type = 'text';
        EYE.innerHTML = '';
        EYE.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z"/></svg>`
        EyeMood = 'close';
    }
    function closeEYE() {
        PASSINP.type = 'password';
        EYE.innerHTML = '';
        EYE.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="m644-428-58-58q9-47-27-88t-93-32l-58-58q17-8 34.5-12t37.5-4q75 0 127.5 52.5T660-500q0 20-4 37.5T644-428Zm128 126-58-56q38-29 67.5-63.5T832-500q-50-101-143.5-160.5T480-720q-29 0-57 4t-55 12l-62-62q41-17 84-25.5t90-8.5q151 0 269 83.5T920-500q-23 59-60.5 109.5T772-302Zm20 246L624-222q-35 11-70.5 16.5T480-200q-151 0-269-83.5T40-500q21-53 53-98.5t73-81.5L56-792l56-56 736 736-56 56ZM222-624q-29 26-53 57t-41 67q50 101 143.5 160.5T480-280q20 0 39-2.5t39-5.5l-36-38q-11 3-21 4.5t-21 1.5q-75 0-127.5-52.5T300-500q0-11 1.5-21t4.5-21l-84-82Zm319 93Zm-151 75Z"/></svg>`;
        EyeMood = 'open';
    }


    EYE.onclick = function() {
        if (EyeMood == 'open') {
            openEYE()
        }else if (EyeMood == 'close'){
            closeEYE()
        }
    }
}

function loginwindowopining() {
    document.getElementById('loginWIND').style.display = "flex";
    windowbackcover.style.display = 'flex';
}
function CreatePostWINDOpening() {
    document.getElementById('AddPostWIND').style.display = "flex";
    windowbackcover.style.display = 'flex';
}
function CreatePostWINDClosing() {
    document.getElementById('AddPostWIND').style.display = "none";
    windowbackcover.style.display = 'none';
    cancelloadingsetup('add')

    const Body = document.getElementById('BodyPost');
    const ImagePost = document.getElementById('ImagePost');
    Body.value = '';
    ImagePost.value = '';
}
function rigsterwindowopining() {
    document.getElementById('rigesterWIND').style.display = "flex";
    windowbackcover.style.display = 'flex';
}
function loginwindowclosing () {
    document.getElementById('loginWIND').style.display = "none";
    windowbackcover.style.display = 'none';
    cancelloadingsetup('log')

    const EYE = document.getElementById('login-passwordEYE');
    const PASSINP = document.getElementById('Password-inp');

    PASSINP.type = 'password';
    EYE.innerHTML = '';
    EYE.style.display = 'none';
    EYE.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="m644-428-58-58q9-47-27-88t-93-32l-58-58q17-8 34.5-12t37.5-4q75 0 127.5 52.5T660-500q0 20-4 37.5T644-428Zm128 126-58-56q38-29 67.5-63.5T832-500q-50-101-143.5-160.5T480-720q-29 0-57 4t-55 12l-62-62q41-17 84-25.5t90-8.5q151 0 269 83.5T920-500q-23 59-60.5 109.5T772-302Zm20 246L624-222q-35 11-70.5 16.5T480-200q-151 0-269-83.5T40-500q21-53 53-98.5t73-81.5L56-792l56-56 736 736-56 56ZM222-624q-29 26-53 57t-41 67q50 101 143.5 160.5T480-280q20 0 39-2.5t39-5.5l-36-38q-11 3-21 4.5t-21 1.5q-75 0-127.5-52.5T300-500q0-11 1.5-21t4.5-21l-84-82Zm319 93Zm-151 75Z"/></svg>`;
    EyeMood = 'open';

    PASSINP.value = '';
    document.getElementById('username-inp').value = '';
}
function rigsternwindowclosing() {
    windowbackcover.style.display = 'none';
    document.getElementById('rigesterWIND').style.display = "none";
    cancelloadingsetup('rig')

    const EYE = document.getElementById('rigester-passwordEYE');
    const PASSINP = document.getElementById('rigester-Password-inp');

    PASSINP.type = 'password';
    EYE.innerHTML = '';
    EYE.style.display = 'none';
    EYE.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="m644-428-58-58q9-47-27-88t-93-32l-58-58q17-8 34.5-12t37.5-4q75 0 127.5 52.5T660-500q0 20-4 37.5T644-428Zm128 126-58-56q38-29 67.5-63.5T832-500q-50-101-143.5-160.5T480-720q-29 0-57 4t-55 12l-62-62q41-17 84-25.5t90-8.5q151 0 269 83.5T920-500q-23 59-60.5 109.5T772-302Zm20 246L624-222q-35 11-70.5 16.5T480-200q-151 0-269-83.5T40-500q21-53 53-98.5t73-81.5L56-792l56-56 736 736-56 56ZM222-624q-29 26-53 57t-41 67q50 101 143.5 160.5T480-280q20 0 39-2.5t39-5.5l-36-38q-11 3-21 4.5t-21 1.5q-75 0-127.5-52.5T300-500q0-11 1.5-21t4.5-21l-84-82Zm319 93Zm-151 75Z"/></svg>`;
    EyeMood = 'open';

    PASSINP.value = '';
    document.getElementById('rigester-name-inp').value = '';
    document.getElementById('rigester-username-inp').value = '';
}

function LogRgSweitch(x) {
    if (x.id == 'swetchToRigster') {
        rigsternwindowclosing()
        loginwindowopining()
    }else if (x.id == 'swetchToLogin'){
        loginwindowclosing()
        rigsterwindowopining()
    }
}

function buttoncontroling() {

    localStorage.token;
                
    if (localStorage.token == undefined) {
        document.getElementById('Login').style.display = "flex";
        document.getElementById('Rigster').style.display = "flex";
        document.getElementById('Logout').style.display = "none";
    }else {
        document.getElementById('Login').style.display = "none";
        document.getElementById('Rigster').style.display = "none";
        document.getElementById('Logout').style.display = "flex";
    }
}
buttoncontroling()

function loadingsetup(IT) {
    if (IT == 'log') {
        document.getElementById('UIname').style.display = 'none';
        document.getElementById('username-inp').style.display = 'none';
        document.getElementById('Password-inp').style.display = 'none';
        document.getElementById('Sui').style.display = 'none';
        document.getElementById('send').style.display = 'none';
        document.getElementById('loading').style.display = 'flex';
        EYE.style.display = 'none';
    }else if (IT == 'rig') {
        document.getElementById('UInameR').style.display = 'none';
        document.getElementById('rigester-name-inp').style.display = 'none';
        document.getElementById('Useravatar').style.display = 'none';
        document.getElementById('UseravatarBACK').style.display = 'none';
        document.getElementById('rigester-Password-inp').style.display = 'none';
        document.getElementById('Srig').style.display = 'none';
        document.getElementById('sendR').style.display = 'none';
        document.getElementById('rigester-username-inp').style.display = 'none';
        document.getElementById('loadingR').style.display = 'flex';
        EYE.style.display = 'none';
    }else if (IT == 'add') {
        document.getElementById('BodyPost').style.display = 'none';
        document.getElementById('BodyPostBACK').style.display = 'none';
        document.getElementById('UInameADD').style.display = 'none';
        document.getElementById('sendADD').style.display = 'none';
        document.getElementById('loadingADD').style.display = 'flex';
    }
}
function cancelloadingsetup(IT) {
    if (IT == 'log') {
        document.getElementById('UIname').style.display = 'flex';
        document.getElementById('username-inp').style.display = 'flex';
        document.getElementById('Password-inp').style.display = 'flex';
        document.getElementById('Sui').style.display = 'flex';
        document.getElementById('send').style.display = 'flex';
        document.getElementById('loading').style.display = 'none';
        EYE.style.display = 'flex';
    }else if (IT == 'rig') {
        document.getElementById('UInameR').style.display = 'flex';
        document.getElementById('rigester-name-inp').style.display = 'flex';
        document.getElementById('Useravatar').style.display = 'flex';
        document.getElementById('UseravatarBACK').style.display = 'flex';
        document.getElementById('rigester-Password-inp').style.display = 'flex';
        document.getElementById('Srig').style.display = 'flex';
        document.getElementById('sendR').style.display = 'flex';
        document.getElementById('rigester-username-inp').style.display = 'flex';
        document.getElementById('loadingR').style.display = 'none';
        EYE.style.display = 'flex';
    }else if (IT == 'add') {
        document.getElementById('BodyPost').style.display = 'flex';
        document.getElementById('BodyPostBACK').style.display = 'flex';
        document.getElementById('UInameADD').style.display = 'flex';
        document.getElementById('sendADD').style.display = 'flex';
        document.getElementById('loadingADD').style.display = 'none';
    }
}

async function loginDoing() {
    const usernameinp = document.getElementById('username-inp');
    const Passwordinp = document.getElementById('Password-inp');

    if (usernameinp.value !== '' && Passwordinp.value !== '') {
        const loginbody = {
            "username" : usernameinp.value,
            "password" : Passwordinp.value
        }
        loadingsetup('log')
        try {
            const baseUrl = "https://tarmeezacademy.com/api/v1/login"
            let app = await axios.post(baseUrl, loginbody)
            let result = app.data;
            localStorage.SuserIS = result.user.id;

            let UserAvatarmini = JSON.stringify(result.user.profile_image);
            if (UserAvatarmini == '{}') {
                UserAvatarmini = 'https://photosnow.net/wp-content/uploads/2023/12/no-dp32.jpg';
            }else {
                UserAvatarmini = result.user.profile_image;
            }
            localStorage.Suseravatar = UserAvatarmini;
            avatar.style.background = `url('${localStorage.Suseravatar}') no-repeat center/cover`


            localStorage.token = result.token;
            buttoncontroling()
            GetPosts()
    
                console.log("ready", result);
                document.getElementById('loginWIND').style.display = 'none';
                Message.innerHTML = 'login successfully'
                Message.style.background = 'rgba(50, 168, 82)';
                Message.style.border = 'red 1px red';
                Message.style.display = 'flex';
                windowbackcover.style.display = 'none'

                usernameinp.value = '';
                Passwordinp.value = '';   
                Passwordinp.type = 'password';
                EYE.innerHTML = '';
                EYE.style.display = 'none';
                EYE.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="m644-428-58-58q9-47-27-88t-93-32l-58-58q17-8 34.5-12t37.5-4q75 0 127.5 52.5T660-500q0 20-4 37.5T644-428Zm128 126-58-56q38-29 67.5-63.5T832-500q-50-101-143.5-160.5T480-720q-29 0-57 4t-55 12l-62-62q41-17 84-25.5t90-8.5q151 0 269 83.5T920-500q-23 59-60.5 109.5T772-302Zm20 246L624-222q-35 11-70.5 16.5T480-200q-151 0-269-83.5T40-500q21-53 53-98.5t73-81.5L56-792l56-56 736 736-56 56ZM222-624q-29 26-53 57t-41 67q50 101 143.5 160.5T480-280q20 0 39-2.5t39-5.5l-36-38q-11 3-21 4.5t-21 1.5q-75 0-127.5-52.5T300-500q0-11 1.5-21t4.5-21l-84-82Zm319 93Zm-151 75Z"/></svg>`;
                EyeMood = 'open'; 

                TokenControling()
                loginwindowclosing()

                setTimeout(() => {
                    Message.style.display = 'none';
                }, 4000)
        }
        catch (err) {
            cancelloadingsetup('log')
            console.log(err)
            Message.innerHTML = err.response.data.message;
            Message.style.background = 'rgba(168, 50, 50)';
            Message.style.border = 'red 1px red';
            Message.style.display = 'flex';

            setTimeout(() => {
                Message.style.display = 'none';
            }, 4000)
        }
    }else {
        alert('fill all the inputs bitch');
    }
}
function loggingout() {
    makingsureOUT.style.display = 'flex';
    windowbackcover.style.display = 'flex'
    windowbackcover.style.opacity = '.9'
}

async function rigsterDoing() {
    const usernameinp = document.getElementById('rigester-username-inp');
    const nameinp = document.getElementById('rigester-name-inp');
    const Passwordinp = document.getElementById('rigester-Password-inp');
    const Useravatar = document.getElementById('Useravatar').files[0];

    if (usernameinp.value !== '' && Passwordinp.value !== '' && nameinp.value !== '') {
        const formapp = new FormData();
        formapp.append("username", usernameinp.value) 
        formapp.append("password", Passwordinp.value) 
        formapp.append("name", nameinp.value) 
        formapp.append("image", Useravatar)
        loadingsetup('rig')
        hHeadrs = {
            "Content-Type" : "multipart/form-data",
        }
        try {
            const baseUrl = "https://tarmeezacademy.com/api/v1/register"
            let app = await axios.post(baseUrl, formapp, {
                headers: hHeadrs
            })
            let result = app.data;
            localStorage.SuserIS = result.user.id;
            let useravatar = result.user.profile_image;
            localStorage.Suseravatar = useravatar;
            avatar.style.background = `url('${localStorage.Suseravatar}') no-repeat center/cover`
            localStorage.token = result.token;
            buttoncontroling()
            GetPosts()
    
                console.log("ready", result);
                document.getElementById('rigesterWIND').style.display = 'none';
                Message.style.background = 'rgba(50, 168, 82)';
                Message.innerHTML = 'rigestered successfully'
                Message.style.display = 'flex';
                windowbackcover.style.display = 'none'

                usernameinp.value = '';
                nameinp.value = '';
                Passwordinp.value = '';   
                Passwordinp.type = 'password';
                EYE.innerHTML = '';
                EYE.style.display = 'none';
                EYE.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="m644-428-58-58q9-47-27-88t-93-32l-58-58q17-8 34.5-12t37.5-4q75 0 127.5 52.5T660-500q0 20-4 37.5T644-428Zm128 126-58-56q38-29 67.5-63.5T832-500q-50-101-143.5-160.5T480-720q-29 0-57 4t-55 12l-62-62q41-17 84-25.5t90-8.5q151 0 269 83.5T920-500q-23 59-60.5 109.5T772-302Zm20 246L624-222q-35 11-70.5 16.5T480-200q-151 0-269-83.5T40-500q21-53 53-98.5t73-81.5L56-792l56-56 736 736-56 56ZM222-624q-29 26-53 57t-41 67q50 101 143.5 160.5T480-280q20 0 39-2.5t39-5.5l-36-38q-11 3-21 4.5t-21 1.5q-75 0-127.5-52.5T300-500q0-11 1.5-21t4.5-21l-84-82Zm319 93Zm-151 75Z"/></svg>`;
                EyeMood = 'open';     

                TokenControling()

                setTimeout(() => {
                    Message.style.display = 'none';
                }, 4000)
        }
        catch (err) {
            Message.innerHTML = err;
            Message.style.background = 'rgba(168, 50, 50)';
            Message.style.border = 'red 1px red';
            Message.style.display = 'flex';

            setTimeout(() => {
                Message.style.display = 'none';
            }, 4000)
        }
    }else {
        alert('fill all the inputs please');
    }
}
avatar.style.background = `url('${localStorage.Suseravatar}') no-repeat center/cover`

let makingsureOUT = document.getElementById('makingsureOUT');
makingsureOUT.style.backgroundColor = 'rgba(92, 69, 97)'
document.getElementById('makingsuredelete').style.backgroundColor = 'rgba(92, 69, 97)'
let cancelOUT = document.getElementById('cancelOUT');
let sureOUT = document.getElementById('sureOUT');

sureOUT.onclick = () => {

    document.getElementById('Login').style.display = "none";
    document.getElementById('Rigster').style.display = "none";
    document.getElementById('Logout').style.display = "flex";

    Message.innerHTML = 'logout successfully';
    Message.style.display = 'flex';

        setTimeout(() => {
            Message.style.display = 'none';
        }, 4000)


    localStorage.clear()
    TokenControling()
    buttoncontroling()
    makingsureOUT.style.display = 'none';

    windowbackcover.style.display = 'none'
    windowbackcover.style.opacity = '1'
}

cancelOUT.onclick = () => {
    makingsureOUT.style.display = 'none';
    windowbackcover.style.display = 'none'
    windowbackcover.style.opacity = '1'
}



cancelDelete.onclick = () => {
    document.getElementById('makingsuredelete').style.display = 'none';
    windowbackcover.style.display = 'none'
    windowbackcover.style.opacity = '1'
}

function TokenControling() {
    const AddPost = document.getElementById('AddPost');
    const avatar = document.getElementById('avatar');
    if (localStorage.token) {
        const home = document.getElementById('home');
        home.style.cssText = `
        position : aboslute;
        left : 50%;
        transform : translate(-50%, -50%);
        top : 50%;
        `
        AddPost.style.display = 'flex';
        avatar.style.display = 'flex';
    }else {
        const home = document.getElementById('home');
        home.style.cssText = `
        position : absolute;
        left : 1.3%;
        transform : translateY(-50%);
        top : 50%;
        `
        AddPost.style.display = 'none';
        avatar.style.display = 'none';
    }
}
TokenControling()



async function AddNewPost() {
    loadingsetup('add')
    try {
        const BodyPost = document.getElementById('BodyPost').value;
        const ImagePost = document.getElementById('ImagePost').files[0];
        const Token = localStorage.token;
        const headersContent = {
            "Content-Type" : 'multipart/form-data',
            "authorization" : `Bearer ${Token}`
        }

        let app = new FormData();
        app.append('body', BodyPost);
        app.append('image', ImagePost);
        let res = await axios.post('https://tarmeezacademy.com/api/v1/posts', app, {
            headers: headersContent
        })

        CreatePostWINDClosing()
        let result = res.data;

        console.log(result);
        cancelloadingsetup('add')
        GetPosts()
        Message.innerHTML = 'New Post Created';
        Message.style.background = 'rgba(50, 168, 82)';
        Message.style.display = 'flex';

        setTimeout(() => {
            Message.style.display = 'none';
        }, 4000)
    }catch (err) {
        console.error(err.response ? err.response.data : err);
    }
}

localStorage.Spostid;
function makngsurepost() {
    if (localStorage.Spostid) {
        document.getElementById('postssback').style.display = 'none';
        document.getElementById('Showsinglepost').style.display = 'flex';
        document.getElementById('backtoallposts').style.display = 'flex';
        Singlepostcontent(localStorage.Spostid)
    
        console.log('faiz')
    }else {
        document.getElementById('postssback').style.display = 'flex';
        document.getElementById('Showsinglepost').style.display = 'none';
        document.getElementById('backtoallposts').style.display = 'none';
    }
}
makngsurepost()
function ShowSinglePostSid(postID) {
    
    if (postID) {
        localStorage.Spostid = postID
    }
    document.getElementById('postssback').style.display = 'none';
    document.getElementById('Showsinglepost').style.display = 'flex';
    document.getElementById('backtoallposts').style.display = 'flex';
    Singlepostcontent(localStorage.Spostid)
    makngsurepost()
}


document.getElementById('backtoallposts').onclick = function() {
    this.style.display = 'none';
    document.getElementById('editbtn').style.display = 'none';
    document.getElementById('deletebtn').style.display = 'none';
    localStorage.removeItem("Spostid");
    makngsurepost()
    GetPosts()
}

async function Singlepostcontent(ID) {
    let Content = '';
    
    
let res = await fetch(`https://tarmeezacademy.com/api/v1/posts/${ID}`);
let data = await res.json();
let all = data.data;
console.log(all.author.id)
if (localStorage.token) {
    if (all.author.id == localStorage.SuserIS) {
        document.getElementById('editbtn').style.display = 'flex'
        document.getElementById('deletebtn').style.display = 'flex'
    }
}
let AllComments = ``;

    let UserAvatar = JSON.stringify(all.author.profile_image);
    if (UserAvatar == '{}') {
        UserAvatar = 'https://photosnow.net/wp-content/uploads/2023/12/no-dp32.jpg';
    }else {
        UserAvatar = all.author.profile_image;
    }
    
    for (comment of all.comments) {
        AllComments += `
            <div id="singlecomment">
                <div id="commecntnav">
                    <div id="commentavatar" style="background : url('${comment.author.profile_image}') no-repeat center/cover"></div>
                    <div id="commentysername">${comment.author.username}</div>
                </div>
                <div id="commentbody" style="color: black;">${comment.body}</div>
            </div>
        `
    }

let UserPic = JSON.stringify(all.image);
    let PicMood;
    if (UserPic == '{}') {
        UserPic = 'https://igpa.uillinois.edu/wp-content/themes/igpa/dist/img/backgrounds/no_image.png';
        PicMood = 'cover';
    }else {
        UserPic = all.image;
        PicMood = 'cover';
    }


    Content = `
    <div id="post" onclick="ShowSinglePostSid()" style="cursor : pointer; width : 50%; height : 98%">
            <div id="pic" style="background : lightgray url('${all.image}') no-repeat center center / ${PicMood}">
                <div id="tags">
                    <p>tags</p>
                    <p>tags</p>
                </div>
            </div>
                <div id="miniavatar" style="background : url('${UserAvatar}') no-repeat center center / cover"></div>
                <div id="miniusername">${all.author.username}</div>
                <div id="body">${all.body}</div>
                <div id="countcomments"> <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M120-240v-80h480v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg> 50,000 </div>
                <div id="countlikes"> <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="red"><path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z"/></svg> 50,000 </div>
                <div id="creatat">${all.created_at}</div>
        </div>
        <div id="editback">
            <div id="editpostinpback">
                <input type="text" id="editingpostbody" placeholder="body">
                <label id="editBodyPostBACK" for="ImagePost">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#8B7DBE"><path d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q53 0 100-15.5t86-44.5q-39-29-86-44.5T480-280q-53 0-100 15.5T294-220q39 29 86 44.5T480-160Zm0-360q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm0-60Zm0 360Z"/></svg>
                </label>
                <input type="file" id="ImagePost" placeholder="Image">
            </div>
            <button id="updatepostbrn" onclick="editpostdoing()">Update</button>
        </div>
        <div id="commenstShoing">

        <div id="commentsplace">
        ${AllComments}
        </div>
        <div id="sendingcomments">
            <input type="text" id="addingcommentbody" placeholder="add comment">
            <button id="postcomments" onclick="postingthecomments()">Post</button>
        </div>

        </div>
    `
    Showsinglepost.innerHTML = '';
    Showsinglepost.innerHTML = Content;
}


async function postingthecomments() {
    let sscommentbody = document.getElementById('addingcommentbody').value;
    
    if (!sscommentbody.trim()) {  
        alert("type something...")
        return;
    }
    let params = {
        "body" : sscommentbody
    }
    try {
        let res = await axios.post(`https://tarmeezacademy.com/api/v1/posts/${localStorage.Spostid}/comments`,  params, {
            headers: {
                "Authorization" : `Bearer ${localStorage.token}`
            },
        })
    }catch (err) {
            Message.innerHTML = err.response.data.message;
            Message.style.background = 'rgba(168, 50, 50)';
            Message.style.border = 'red 1px red';
            Message.style.display = 'flex';

            setTimeout(() => {
                Message.style.display = 'none';
            }, 4000)
    }
    Singlepostcontent(localStorage.Spostid);
}

let moodeditpage = 'edit';

async function showeditpage() {
    if (moodeditpage == 'edit') {
        document.getElementById('commentsplace').style.display = 'none';
        document.getElementById('sendingcomments').style.display = 'none';
        document.getElementById('editback').style.display = 'flex';
        document.getElementById('editbtn').innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#666666"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>';
        moodeditpage = 'canseledit';
    }else {
        document.getElementById('commentsplace').style.display = 'flex';
        document.getElementById('sendingcomments').style.display = 'flex';
        document.getElementById('editback').style.display = 'none';
        document.getElementById('editbtn').innerHTML = 'Edit';
        moodeditpage = 'edit';
    }
    let res = await axios.get(`https://tarmeezacademy.com/api/v1/posts/${localStorage.Spostid}`)
    let data = res.data.data;
    console.log(data);
    document.getElementById('editingpostbody').value = data.body;
}

async function editpostdoing() {
    const formapp = new FormData();
    formapp.append("body", document.getElementById('editingpostbody').value)
    formapp.append("_method", "put")
    hHeadrs = {
        "Content-Type" : "multipart/form-data",
        "Authorization" :`Bearer ${localStorage.token}` 
    }
    try {
        let res = await axios.post(`https://tarmeezacademy.com/api/v1/posts/${localStorage.Spostid}`, formapp, {
            headers : hHeadrs
        })
        let data = res.data.data;
        console.log(data);
        showeditpage()
        Singlepostcontent(localStorage.Spostid);
    }catch (err) {
        console.log(err)
        Message.innerHTML = err.response.data.message;
        Message.style.background = 'rgba(168, 50, 50)';
        Message.style.border = 'red 1px red';
        Message.style.display = 'flex';

        setTimeout(() => {
            Message.style.display = 'none';
        }, 4000)
    }
}

document.getElementById('deletebtn').onclick = function() {
    document.getElementById('makingsuredelete').style.display = 'flex';
    windowbackcover.style.display = 'flex'
    windowbackcover.style.opacity = '.9'
    document.getElementById('makingsuredelete').style.display = 'flex';
}

async function DeletingPost() {
    document.getElementById('makingsuredelete').style.display = 'flex';
    document.getElementById('makingsuredelete').innerHTML = '';
    document.getElementById('makingsuredelete').innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M480-520q66 0 113-47t47-113v-120H320v120q0 66 47 113t113 47ZM160-80v-80h80v-120q0-61 28.5-114.5T348-480q-51-32-79.5-85.5T240-680v-120h-80v-80h640v80h-80v120q0 61-28.5 114.5T612-480q51 32 79.5 85.5T720-280v120h80v80H160Z"/></svg>`;
    headers = {
        "Authorization" : `Bearer ${localStorage.token}`
    }
    try {
        let res = await axios.delete(`https://tarmeezacademy.com/api/v1/posts/${localStorage.Spostid}`, {
            headers: headers
        })
        console.log(res);

            Message.innerHTML = 'Deleted.';
            Message.style.background = 'rgba(50, 168, 82)';
            Message.style.display = 'flex';

            setTimeout(() => {
                Message.style.display = 'none';
            }, 4000)
            document.getElementById('backtoallposts').style.display = 'none';
            document.getElementById('editbtn').style.display = 'none';
            document.getElementById('deletebtn').style.display = 'none';
            document.getElementById('makingsuredelete').style.display = 'none';
            document.getElementById('windowbackcover').style.display = 'none';
            localStorage.removeItem("Spostid");
            makngsurepost()
            GetPosts()
    }catch(err) {
            Message.innerHTML = err.response.data.message;
            Message.style.background = 'rgba(168, 50, 50)';
            Message.style.border = 'red 1px red';
            Message.style.display = 'flex';

            setTimeout(() => {
                Message.style.display = 'none';
            }, 4000)
    }
}

// document.getElementById('avatar').onmouseenter = () => {
//     document.getElementById('profileinfohover').style.opacity = '1';
// }
// document.getElementById('avatar').onmouseleave = () => {
//     document.getElementById('profileinfohover').style.opacity = '0';
// }

// let ShowProfile = 'Show';
// function ShoeProfilePage() {
//     if (ShowProfile == 'Show') {
//         document.getElementById("ProfilePage").style.display = 'flex';
//         ShowProfile = 'cover'
//     }else {
//         document.getElementById("ProfilePage").style.display = 'none';
//         ShowProfile = 'Show'
//     }
// }
