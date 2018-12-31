class Modal{
    constructor(jQueryDom,inputIdList){
        this.dom=jQueryDom
        this.inputList=[]
        var me=this
        inputIdList.forEach(function(e){
            me.inputList.push($('#'+e))
        })
    }
    show(){
        this.dom.modal('show')
    }
    hide(){
        this.dom.modal('hide')
    }
    resetInput(){
        this.inputList.forEach(function(e){
            e.val('')
        })
    }
}

var contactList = $('#contact-list')


var addContactButton = $('#add-contact-button')
var addContactModal =new  Modal(
    $('#add-contact-modal'),
    ['add-contact-name','add-contact-phone']
)
var addContactSubmit = $('#add-contact-submit')
var addContactName = $('#add-contact-name')
var addContactPhoneNumber = $('#add-contact-phone')


var reviseModal=new Modal(
    $('#revise-modal'),
    ['revise-phone','revise-name']
)
var reviseSubmit = $('#revise-submit')
var reviseName = $('#revise-name')
var revisePhoneNumber = $('#revise-phone')
var revise_id = ''    //保存要修改的ID

var searchInput=$('#search-input')








//新填入的html元素，后添加监听器
var addEventListener = function () {
    var removeBtn = $('.remove-btn')
    removeBtn.on('click', function () {
        removeContact($(this).attr('data-_id'))
    })
    $('.revise-btn').on('click', function () {
        console.log($(this).attr('data-_id'))
    })
    $('.revise-btn').on('click', function () {
        revise_id = $(this).attr('data-_id')
        $.ajax({
            type: 'GET',
            url: '/getContact',
            data: {
                _id: revise_id
            },
            success: function (e) {
                var nowRevise = e[0]
                if (nowRevise) {
                    reviseName.val(nowRevise.name)
                    revisePhoneNumber.val(nowRevise.phoneNumber)
                }
                reviseModal.show()
            }
        })
    })
}



var fillData = function (arr) {
    var html = '';
    arr.forEach(element => {
        html += `
        <li class="list-group-item list-group-item-success">
        <h3>${element.name}</h3>
        <p>${element.phoneNumber}</p>
        <div class="btn-group" role="group" aria-label="...">
            <a type="button" href="tel:${element.phoneNumber}" class="btn btn-default">拨打号码</a>
            <a type="button" class="btn btn-default revise-btn" data-_id="${element._id}">修改联系人信息</a>
            <a type="button" class="btn btn-default remove-btn" data-_id="${element._id}">删除联系人</a>
        </div>
    </li>
        `
    });
    contactList.html(html)
    addEventListener()
}

//获取所有联系人
var getAllContact = function () {
    $.ajax({
        type: 'GET',
        url: '/getAllContact',
        data: {},
        success: function (result) {
            fillData(result)
        }
    })
}

//添加联系人
var addContact = function (name, phoneNumber) {
    $.ajax({
        type: 'POST',
        url: '/addContact',
        data: {
            name: name,
            phoneNumber: phoneNumber
        },
        success: function (result) {
            //添加完之后重新获取联系人的方法
            getAllContact();
        }
    })
}

//删除联系人
var removeContact = function (_id) {
    $.ajax({
        type: 'GET',
        url: '/remove',
        data: {
            _id: _id
        },
        success: function () {
            getAllContact()
        }
    })
}

//修改联系人
var reviseContact = function (_id, name, phoneNumber) {
    $.ajax({
        type: 'POST',
        url: '/revise',
        data: {
            _id: _id,
            name: name,
            phoneNumber: phoneNumber
        },
        success: function (e) {
            getAllContact();
        }
    })
}

//搜索
var search=function(wd){
    $.ajax({
        type:'GET',
        url:'/search',
        data:{
            wd:wd
        },
        success:function(e){
            fillData(e)
        }
    })
}



//页面一开始就有的元素挂在这
var initListener = function () {
    addContactButton.on('click', function () {
        addContactModal.show()
    })
    addContactSubmit.on('click', function () {
        var name = addContactName.val();
        var phoneNumber = addContactPhoneNumber.val();
        addContact(name, phoneNumber)
        addContactModal.hide()
        addContactModal.resetInput()
    })
    reviseSubmit.on('click', function () {
        var name = reviseName.val()
        var phoneNumber = revisePhoneNumber.val()
        reviseModal.resetInput()
        var _id = revise_id
        revise_id = ''
        reviseContact(_id, name, phoneNumber)
        reviseModal.hide()
    })
    searchInput.on('input',function(){
        search($(this).val())
    })
}


var main = function () {
    getAllContact();
    initListener()
}
main()