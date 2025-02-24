import{ getUser,getPosts,getComments,getCommentLengths} from './9-secuencial-async.js'

async function fetchOrderDetails() {
  try {
    const user = await getUser(1);
    const posts = await getPosts(user.id);
    const comments = await getComments(posts[0].id);
    const commentLengths =  getCommentLengths(comments)
    const filteredComments=comments.filter((comment)=> comment.body.length > 150);
    const totalCommentLength = commentLengths.reduce((sum, length) => sum + length, 0);

    console.log("Comentarios del primer post:", comments);
    console.log('Longitud comentarios '+ commentLengths);
    console.log(filteredComments);
    console.log("total de caracteres en los comentarios:", totalCommentLength);

    console.log("Fin");
  } catch (error) {
    console.error("Error:", error);
  }
}

fetchOrderDetails();