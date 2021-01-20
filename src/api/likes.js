const getLikeImage = (liked) =>{
    if (liked){
        return require('../../res/img/s2-checked.png')
    }
    else{
        return require('../../res/img/s2.png')
    }

}

const likePhotograph = (liked,likes) => {
    let numberOfLike = likes;
    if(liked){
        numberOfLike --;
    }
    else{
        numberOfLike ++;
    }
    return [!liked, numberOfLike];
}

export  {getLikeImage, likePhotograph}