window.onload = function() {
    // 获取提示盒子
    var cont1 = document.querySelector('.content1');
    var cont2 = document.querySelector('.content2');
    var cont3 = document.querySelector('.content3');
    var cont4 = document.querySelector('.content4');
    var cont5 = document.querySelector('.content5');

    // 获取所有li
    var li1 = document.querySelector('.li1');
    var li2 = document.querySelector('.li2');
    var li3 = document.querySelector('.li3');
    var li4 = document.querySelector('.li4');
    var li5 = document.querySelector('.li5');

    // 获取弹框
    var show = document.getElementById('show');
    var tru = []; // 正确题目
    var fals = []; // 错误题目

    // 获取第一个 li的 next按钮
    var next1 = document.querySelector("#btn-one");
    next1.onclick = function() {
     
        var dog = document.getElementsByName('dog');

        // console.log(speed);
        // 获取 id 为 content-one div 中的 p 和 span 标签
        var p = document.querySelector("#content-one p");
        var span = document.querySelector('#content-one span');

        // 判断 input 是否都未选中的
        if (!dog[0].checked && !dog[1].checked && !dog[2].checked && !dog[3].checked) {
            // 如果都未选中，弹出一个弹框提示
            alert('Please choose an answer');
        } else {
            // 如果不是都未选中，则对 name属性值为 speed 的 input 进行遍历
            for (var i = 0; i < dog.length; i++) { // i 从零开始，每遍历一次，i++
               
                // 如果input被选中了
                if (dog[i].checked) { // checked：选中
                    // 下面则要 判断 选中的 input 中的 value 值是否 不是 s
                    if (dog[i].value != "s") {
                        // 如果不等于 s,则在 fals 数组中的末尾 添加数字 1，1表示是第几个题目
                        fals.push(1); // 当前是第一个题目 1
                        // innerHTML 属性可以设置 标签显示内容
                        p.innerHTML = `Your answer is incorrent`;
                        span.innerHTML = `Tne correct answer A : New Zealand `;
                    } else { // if else : 如果 否则
                        // 如果等于 s，则在 tru 数组的末尾添加 1
                        tru.push(1);
                        // 设置 p 标签的显示内容
                        p.innerHTML = `Your answer is corrent`;
                    }
                }
            }
            // this 相当于 next 按钮
            // parentNode：可以获取父级元素
            // 将父级元素 li 隐藏起来
            this.parentNode.style.display = 'none';
        }
    }

    // 获取第二个 li的 next按钮
    var next2 = document.querySelector("#btn-two");
    next2.onclick = function() { // 给第二个按钮绑定一个单击的函数
        // 获取 name属性值为 hazards 的所有 input
        var hazards = document.getElementsByName('hazards');
        // console.log(hazards);

        // 获取 id 为 content-two div 中的 p 和 span 标签
        var p = document.querySelector('#content-two p');
        var span = document.querySelector('#content-two span');

        // 判断 input 是否都未选中的
        if (!hazards[0].checked && !hazards[1].checked && !hazards[2].checked && !hazards[3].checked) {
            // 如果都未选中，弹出一个弹框提示
            alert('No answer filled yet!');
        } else {
            // 如果不是都未选中，则对 name 属性值为 speed 的 input 进行遍历
            for (var i = 0; i < hazards.length; i++) { // i 从零开始，每遍历一次，i++
                // 如果input被选中了
                if (hazards[i].checked) {
                    // 下面则要 判断 选中的 input 中的 value 值是否 不是 s
                    if (hazards[i].value != "s") {
                        // 如果不等于 s,则在 fals(错误的) 数组中的末尾 添加数字 1，1表示是第几个题目
                        fals.push(2); // 在 1 的后面加上一个 2
                        // innerHTML 属性可以设置 标签显示内容
                        p.innerHTML = `Your answer is incorrent`; // 设置 p 标签的显示内容
                        span.innerHTML = `Tne correct answer B：Running` // 设置 span 标签的显示内容
                    } else {
                        // 如果等于 s，则在 tru 数组的末尾添加 1
                        tru.push(2); // 在上面的基础上加上一个 2 
                        // 设置 p 标签的显示内容
                        p.innerHTML = `Your answer is corrent`;
                    }
                }
            }
            // this 相当于 next 按钮
            // parentNode：可以获取父级元素
            // 将父级元素 li 隐藏起来
            this.parentNode.style.display = 'none';
        }
    }

    var next3 = document.querySelector("#btn-three");
    next3.onclick = function() { // 给 next 按钮绑定单击事件
        var P = document.getElementsByName('P');
        var p1 = document.querySelector('#content-three p');
        var span = document.querySelector('#content-three span');
        if (!P[0].checked && !P[1].checked && !P[2].checked && !P[3].checked) {
            alert('No answer filled yet!');
        } else {
            for (var i = 0; i < P.length; i++) {
                if (P[i].checked) {
                    if (P[i].value != "s") { // 需要满足的条件
                        fals.push(3);
                        p1.innerHTML = `Your answer is incorrent`;
                        span.innerHTML = `Tne correct answer B: Pangu`
                    } else {
                        tru.push(3);
                        p1.innerHTML = `Your answer is corrent`;
                    }
                }
            }
            this.parentNode.style.display = 'none';
        }
    }

    var next4 = document.querySelector("#btn-four");
    next4.onclick = function() {
        var hide = document.getElementsByName('hide'); // 获取 name属性 值 为 ... 的元素
        var p = document.querySelector('#content-four p');
        var span = document.querySelector('#content-four span');
        if (!hide[0].checked && !hide[1].checked && !hide[2].checked && !hide[3].checked) {
            alert('No answer filled yet!');
        } else {
            for (var i = 0; i < hide.length; i++) {
                if (hide[i].checked) {
                    if (hide[i].value != "s") {
                        fals.push(4);
                        p.innerHTML = `Your answer is incorrent`;
                        span.innerHTML = `Tne correct answer D :Old man under the moon`
                    } else {
                        tru.push(4);
                        p.innerHTML = `Your answer is corrent`;
                    }
                }
            }
            this.parentNode.style.display = 'none';
        }
    }


    // 获取上传 按钮
    var up = document.querySelector("#btn-five");
    // 绑定单击事件
    up.onclick = function() {
        // 获取 name属性值为 live 的所有 input 
        var live = document.getElementsByName('live');

        // 获取 弹框盒子 中的两个 p 标签
        var p1 = document.querySelector('.p1');
        var p2 = document.querySelector('.p2');

        // 获取 id 为 content-ten div 中的 p 和 span 标签
        var p = document.querySelector('#content-five p');
        var span = document.querySelector('#content-five span');

        // 判断 input 是否都未选中的
        if (!live[0].checked && !live[1].checked && !live[2].checked && !live[3].checked) {
            // 如果都未选中，弹出一个弹框提示 
            alert('Please choose an answer');
        } else {
            // 如果不是都未选中，则对 name属性值为 live 的 input 进行遍历
            for (var i = 0; i < live.length; i++) {
                // 如果input被选中了
                if (live[i].checked) {
                    // 下面则要 判断 选中的 input 中的 value 值是否 不是 s
                    if (live[i].value != "s") {
                        // 如果不等于 s,则在 fals 数组中的末尾 添加数字 10，10表示是第几个题目
                        fals.push(5);
                        // innerHTML 属性可以设置 标签显示内容
                        p.innerHTML = `  Your answer is incorrent`;
                        span.innerHTML = `Tne correct answer is: B:Peach Tree `
                    } else {
                        // 如果等于 s，则在 tru 数组的末尾添加 1
                        tru.push(5);
                        // 设置 p 标签的显示内容
                        p.innerHTML = `Your answer is corrent`;
                    }
                }
            }
            // tru 中 存储的是 正确的题目
            var testTrue = "Questions which answers are correct: " + tru;
            // 假如我们选中的答案只有 第一个和第二个错误，tru里面存储的是 您正确的题目为: 3~10

            // fals 中 存储的是 错误的题目
            var testFalse = "Questions which answers are incorrect: " + fals;

            // 给弹框中的 两个 p 标签设置显示内容
            p1.innerHTML = testTrue;
            p2.innerHTML = testFalse;

            // 将弹框显示出来
            show.style.display = " block";
        }
    }

    // 显示content盒子 与 li 方法
    function block() {
        cont1.style.display = 'block';
        cont2.style.display = 'block';
        cont3.style.display = 'block';
        cont4.style.display = 'block';
        // cont5.style.display = 'block';
        // cont6.style.display = 'block';
        // cont7.style.display = 'block';
        // cont8.style.display = 'block';
        // cont9.style.display = 'block';
    cont5.style.display = 'block';
 
        li1.style.display = 'block';
        li2.style.display = 'block';
        li3.style.display = 'block';
        li4.style.display = 'block';
        // li5.style.display = 'block';
        // li6.style.display = 'block';
        // li7.style.display = 'block';
        // li8.style.display = 'block';
        // li9.style.display = 'block';
        li5.style.display = 'block';
    }

    // 隐藏 按钮方法
    function none() {
        next1.style.display = "none";
        next2.style.display = "none";
        next3.style.display = "none";
        next4.style.display = "none";
        // next5.style.display = "none";
        // next6.style.display = "none";
        // next7.style.display = "none";
        // next8.style.display = "none";
        // next9.style.display = "none";
        up.style.display = "none";
    }
    // 获取 弹框中的 叉号标签
    var span = document.querySelector('#show span');
    // 给叉号绑定单击事件
    span.onclick = function() {
        // 获取最大的盒子
        var box = document.querySelector(".box");

        // 获取 最大盒子的高度
        var boxHeight = box.offsetHeight;

        // 隐藏 弹框
        show.style.display = 'none';

        // 这里的 num 是根据 li 标签的数量 来定义的
        var num = 10;
        // 改变最外层 div 的高度，让所有的 li 都能显示出来
        box.style.height = num * boxHeight + 'px';
        // 调用 block 函数，// 显示content盒子 与 li 标签
        block();
        // 调用 none 函数，// 隐藏 所有的按钮
        none();
    }
}