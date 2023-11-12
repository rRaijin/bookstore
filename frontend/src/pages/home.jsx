import React, { useState, useEffect } from 'react';
import { checkNumber, capitalizeFirstAndLast } from '../utils.js'
import Like from '../components/reactions/like.jsx';
import Dislike from '../components/reactions/dislike.jsx';
import Comment from '../components/comment/commentItem.jsx';


// const x = {a: {b:1}}
// console.log(a.b) // a['b']
function changeEmailFunc(items) {
    const results = [];
    for (let i = 0; i < items.length; i++) {
        const el = {...items[i]}; // {email: 'some string', x: 1}

        // Внутрь оператора switch-case передается некоторое значение, которое сравнивается с каждым кейсом до первого соответствия
        switch (el.email) { // 'Eliseo@gardner.biz'
            case 'Jayne_Kuhic@sydney.com':
                el.email = 'Shanna@melissa.tv';
                break;
            case 'Nikita@garfield.biz':
                el.email = 'Nathan@yesenia.net';
                break;
            case 'Hayden@althea.biz':
                el.email = 'Julianne.OConner@kory.org';
                break;
            case 'Lew@alysha.tv':
                el.email = 'Lucio_Hettinger@annie.ca';
                break;
            case 'Eliseo@gardner.biz':
                el.email = 'Sincere@april.biz';
                break;

            default:
                el.email = 'qwerty';
                break;
        }

        // if (el.email === 'Jayne_Kuhic@sydney.com') {
        //     el.email = 'Shanna@melissa.tv';
        // } else if (el.email === 'Nikita@garfield.biz') {
        //     el.email = 'Nathan@yesenia.net';
        // } else if (el.email === 'Hayden@althea.biz') {
        //     el.email = 'Julianne.OConner@kory.org';
        // } else if (el.email === 'Lew@alysha.tv') {
        //     el.email = 'Lucio_Hettinger@annie.ca';
        // } else if (el.email === 'Eliseo@gardner.biz') {
        //     el.email = 'Sincere@april.biz';
        // } else {
        //     el.email = 'qwerty';
        // }

        results.push(el);
    }
    return results;
}


// 01.10 TASKS
// Task 1: Страницу поста оформить, вывести текст и список комментариев, и кнопку для каждого комментария - получить данные его автора
// Если данные пришли добавить автора в стейт в список авторов и вывести под комментарием его данные - YES
// Task 2: После того, как запросили автора комментария и вывели его данные - под ними вывели и его заметки - NO

// 08.10 TASKS
// Оформить страницу так:
// 1) у каждого абзаца сделать только первую букву очень большой, жирной, и красного цвета - YES/NO
// 2) после каждого предложения долждна стоять точка и пробел, а первое слово в этом предложении должно начинаться с большой буквы - NO
// 3) оформить красиво заголовок - текст подчеркнутый и с наколоном, голубого цвета и также начинается с большой буквы - YES
// 4) для комментариев свойство 'name' выводим полностью текст, а 'body' обрезаем до 30(50) символов и добавляем '... more' - YES
// 5) для автора помимо имени вывести city, street & suite - YES
// 6) под именем автора вывести список его заметок, не весь, первые пять (https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/slice) - YES
// 7) список тодос идет в столбик - 5 строк, напротив названия заметки показать статус ее выполнения(если да - V, если нет - Х) - YES

// 25.10 TASKS
// 1) Создать файл utils.js в src/
// 2) Написать функцию, которая принимает строку и делает первый и последний символ большим.
// 3) В файле home.jsx применить эту функцию, передав ей следующие строки: 'хлеб', 'молоко', 'крупа', 'рыба', вывести в console.log 
// ИТОГОВЫЙ результат преобразования в виде массива.
// 4) В том же utils.js написать еще одну функцию, внутри которой есть массив чисел [2, 8, 42], функция принимает любой параметр,
// проверить является ли числом входящий параметр, если нет - вывести в console.log сообщение об этом, если это число - проверить
// является ли оно четным, если оно нечетное - вывести соответствующее значение, если четное - проверить, есть ли оно в массиве, находящемся
// в этой функции, если да - вывести в консоль слово 'YES', если нет - 'NO' 

export default () => {
    const [posts, setPosts] = useState([]);
    const [selectedId, setSelectedId] = useState(0);
    const [hasPrevPost, setHasPrevPost] = useState(false);
    const [firstTransition, setFirstTransition] = useState(false);
    const [comments, setComments] = useState([]);
    const [authors, setAuthors] = useState([]);
    const [notes, setNotes] = useState([]);
    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);
    const views = 100;

    const getNotesForAuthor = (authorId) => {
        fetch(`https://jsonplaceholder.typicode.com/todos${authorId}`, {
            method: 'GET',
        })
            .then((response) => {
                if (response.status === 200) {
                    return response.json();
                }
            })
            .then((data) => {
                if (data && data !== undefined && data !== 'undefined') {
                    setNotes((prevNotes) => ({
                        ...prevNotes,
                        [authorId]: data.slice(0, 5), 
                    }));
                } else {
                    console.log('NO NOTES DATA!');
                }
            });
    };

    const parentCb = (userId, slicedData) => {
        setNotes([...notes, {authorId: userId, todos: slicedData}]);
    }

    checkNumber('hello world!');
    checkNumber(7);
    checkNumber(8);
    checkNumber(21);

    const strings = ['хлеб', 'молоко', 'крупа', 'рыба'];
    const results = strings.map(str => capitalizeFirstAndLast(str));
    // console.log('strings: ',results);

    const getPost = (postId) => {
        // Если использовать filter() Фильтруем по критерию(id), если в массиве не будет объекта - вернется пустой массив, 
        // если будет - массив с одним объектом
        const exists = posts.find(post => post.id === postId);
        // console.log('exists: ', exists);
        // if - else (если - иначе), if - else if - else(если - иначе если - иначе)
        if (exists) {
            setSelectedId(postId);
        } else {
            fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
                method: 'GET',
            })
            .then((response) => {
                if (response.status === 404) {
                    setHasPrevPost(false);
                } else if (response.status === 200) {
                    return response.json();
                }
            })
            .then((data) => {
              if (data && data !== undefined && data !== 'undefined') {
                  const updatedPosts = [...posts.filter(post => post.id !== data.id), data];
                  setPosts(updatedPosts);
                  setSelectedId(postId);
                  if (postId === 1 && !firstTransition) {
                      setHasPrevPost(false);
                      setFirstTransition(true);
                  } else {
                      setHasPrevPost(true);
                  }
              } else {
                  console.log('NO DATA!');
              }
            });
        }
    };

    const getCommentsForPost = (postId) => {
        const exists = comments.find(comm => comm.postId === postId);
        // console.log('exists: ', exists, 'comments: ', comments); 
        if (exists) {
            // console.log('Comments for this post already fetched!');
        } else {
            fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`, {
                method: 'GET',
            })
            .then((response) => {
              if (response.status === 200) {
                  return response.json();
              }
            })
            .then((data) => {
              if (data && data !== undefined && data !== 'undefined') {
                  const updatedComments = [...comments.filter(comm => comm.postId !== postId), ...data];
                  // console.log('upda: ', updatedComments)
                  const mutatedList = changeEmailFunc(updatedComments);
                  setComments(mutatedList);
              } else {
                  console.log('NO COMMENTS DATA!');
              }
            });
        }
    };

    const getAuthorsData = () => {
        fetch(`https://jsonplaceholder.typicode.com/users`, {
            method: 'GET',
        })
        .then((response) => {
            if (response.status === 200) {
                return response.json();
            }
        })
        .then((data) => {
            if (data && data !== undefined && data !== 'undefined') {
                // console.log('authors: ', data);
                setAuthors(data);
            } else {
                console.log('NO AUTHOR DATA!');
            }
        });
    };

    useEffect(() => {
        getAuthorsData();
    }, []);

    useEffect(() => {
        getPost(1);
    }, []);

    useEffect(() => {
        if (selectedId !== 0) {
            getCommentsForPost(selectedId);
        } else {
            // console.log('No comments for post id=0')
        }
    }, [selectedId]);

    useEffect(() => {
        if (currentPost) {
            getNotesForAuthor(currentPost.userId);
        }
    }, []);

    // GET IN START
    useEffect(() => {
        fetch('http://localhost:3001/api/users', {
            method: 'GET',
            headers: { 'Accept': 'application/json' }
        })
        .then(async (response) => {
            if (response.ok === true);
            const results = await response.json();
            console.log('response: ', results);
        })
    }, []);

    const addNewUser = () => {
        // CREATE !!!
        fetch('http://localhost:3001/api/users', {
            method: 'POST',
            headers: { "Accept": "application/json", "Content-Type": "application/json" },
            body: JSON.stringify({
                name: 'Nevazno',
                age: parseInt('1234', 10)
            })
        }).then(response => {
            console.log('resp: ', response);
        })
    }


    const currentPost = posts.find(p => p.id === selectedId);
    const commentsList = comments.filter(comm => comm.postId === selectedId);

    // Она делает первую букву большой и точку в конце
    const processFirstLetterAndDotInEnd = (string, makeFirstLetterRed = false) => {
        const firstLetter = string.charAt(0).toUpperCase(); // что она делает
        let additionalText = string.slice(1);
        const cssName = makeFirstLetterRed ? 'text-red' : '';
        if (additionalText[additionalText.length - 1] !== '.') {
            additionalText = additionalText + '.';
        }

        return (
            <p>
                <span className={cssName}>{firstLetter}</span>
                <span>{additionalText}</span>
            </p>
        )
    }

    return (
        <div className=''>
            <button className='button-next-prev' onClick={addNewUser}>
                ADD USER
            </button>



            <div className=''>
                {hasPrevPost && (
                    <button className='button-next-prev' onClick={() => getPost(selectedId - 1)}>
                        PREV
                    </button>
                )}
                <button className='button-next-prev' onClick={() => getPost(selectedId + 1)}>
                    NEXT
                </button>
            </div>
            {
                currentPost ?
                <React.Fragment>
                    <div className='mb-20px'>
                        <h1 className='underlined-text text-not-bold italic-text text-blue f-l-140p'>
                            {currentPost.title && processFirstLetterAndDotInEnd(currentPost.title)}
                        </h1>
                    </div>
                    <div>
                        <p>
                            <div className=''>
                                {
                                    currentPost.body &&
                                    processFirstLetterAndDotInEnd(currentPost.body, true)
                                }
                            </div>
                            <div className=''>{currentPost.body && processFirstLetterAndDotInEnd(currentPost.body)}</div>
                            <div className=''>{currentPost.body}</div>
                            <div className=''>{currentPost.body}</div>
                            <div className=''>{currentPost.body}</div>
                        </p>
                    </div>

                    
                    <div className='user-actions'>
                        <div className='views'>
                            {views}
                        </div>
                        <Like item={currentPost}/>
                        <Dislike item={currentPost} defaultValue={4}/>
                    </div>
                </React.Fragment>
                :
                <div>No data</div>
            }

            {commentsList.length > 0 ? (
                <div className='mt-20px' key={`comments-list-for-post-${selectedId}`}>
                    <h2>Comments:</h2>
                    {
                        commentsList.map((comment) => {
                            return (
                                <Comment
                                    comment={comment}
                                    authors={authors}
                                    notes={notes}
                                    parentCb={parentCb}/>
                            )
                        })
                    }
                </div>
            ) : (
                <div>No comments</div>
            )}
        </div>
    );
};




// export default () => {
//     const [items, setItems] = useState([]);

//     // без зависимостей сработает как didMount - то есть 1 раз, при монтировании компонента
//     useEffect(() => {
//         console.log('use effect');
//         // выполняем чтение данных
//         fetch('https://jsonplaceholder.typicode.com/posts', { // /posts GET
//             method: 'GET'
//         })
//         .then(response => { // ответ откуда-то, или наш сервер или удаленній АПИ
//             // console.log('response: ', response)
//             // console.log('serialized: ', response.json())

//             // получаем готовіе сериализированніе данніе(в человеческом виде) или получаем ошибку если
//             // сериализация не возможна
//             return response.json();
//         })
//         .then(json => {
//             console.log('готовые данные: ', json);
//             setItems(json); // устанавливаем стейт
//         })
//         // const x = test();
//         // console.log('x: ', x);
//     }, []);

//     const test = () => 42;

//     console.log('items: ', items);

//     return (
//         <div className=''>
//             {
//                 items.length === 0 ?
//                 <div>No data</div> :
//                 <ul className='items-test'>
//                     {
//                         // Обходим массив, віводим item.title
//                         items.map(
//                             // map принимает в себя функцию, которая что-то делает с каждым элементом,
//                             // а она в себя принимает в качестве параметров сам элемент и его индекс(номер по порядку)
//                             // обязательным является только элемент
//                             (item, i) => {
//                                 return (
//                                     <div key={`element-${i}`}>
//                                         {item.title}
//                                     </div>
//                                 )
//                             }
//                         )
//                     }
//                 </ul>
//             }
//         </div>
//     )
// }