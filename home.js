
let blogs = [
    {id:1,title:'Anh Bon', content: 'yeu em Hanh',img:'https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2017/07/chup-anh-sen-ho-tay.jpg'},
    {id:2,title:'Anh Bon 2', content: 'yeu em Hanh',img:'https://lapvui.com/wp-content/uploads/2022/04/tu-the-chup-anh-voi-hoa-sen-thumb.jpg'},
    {id:3,title:'Anh Bon 3', content: 'yeu em Hanh',img:'https://sheis.vn/wp-content/uploads/2022/05/cac-tu-the-chup-anh-voi-hoa-sen-11.jpg'},
]

let str = '';
for (const blog of blogs) {
    str += `<div class="col-sm-4">
            <h2>${blog.title}</h2>
            <img src="${blog.img}" width="300" height="200">
            <p>${blog.content}</p>
            <a type="button" class="btn btn-warning" >Edit</a>
            <a type="button" class="btn btn-danger" >Delete</a>
        </div>`
}

document.getElementById("show").innerHTML = str;