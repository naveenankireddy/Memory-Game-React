import React, { Component } from 'react'
import {images} from '../Components/Images';

export default class Board extends React.Component {
    constructor(){
        super();
        this.state = {
            moves:0,
            images:[],
        imagesFlipped:[],
        processing:false,

        score:0,
            }
    }
    componentDidMount() {
        this.setState({images:images})
    }

    showImage = ({id,mid}) =>{
    let imagesFlipped = [...this.state.imagesFlipped,{id,mid}];
    const {images} = this.state;
    const newImages = images.map((image) => { 
        if(image.id === id){
            
                image.isFlipped=true
            
        }
        return image
    });
    let processing = imagesFlipped.length === 2 ? true : false;
    this.setState({ images: newImages, imagesFlipped, processing,  });
  }

  componentDidUpdate(_prevProps,prevState) {
    let imagesFlipped = this.state.imagesFlipped;
    let newImages = this.state.images.slice();
    if (imagesFlipped.length === 2) {
      let moves = prevState.moves + 1;
      const [first, second] = imagesFlipped;
      if (first.mid === second.mid && first.id !== second.id) {

        console.log(first.mid , second.mid)
       let score=this.state.score;
        newImages = newImages.map((image) => {
          if (imagesFlipped.some((flippedImage) => flippedImage.id === image.id)) {
            return { ...image, isMatched: true, isFlipped: true };
          }
          return image;
        });
        this.setState({
          images: newImages,
          imagesFlipped: [],
          moves,
          score:score+100,
          processing: false,
          
        });
      } else {
        setTimeout(() => {
          newImages = newImages.map((image) => {
            if (
              imagesFlipped.some((flippedImage) => flippedImage.id === image.id)
            ) {
              return { ...image, isFlipped: false, isMatched: false };
            }
            return image;
          });
          this.setState({
            images: newImages,
            imagesFlipped: [],
            moves,
            processing: false,
          });
        }, 500);
      }
    }
  }

    render() {
        let { images } = this.state;
        // images = shuffle(images)
        return (
            <>
            <h1>score:{this.state.score}</h1>
            {this.state.score == 800 ? <h1>Hey You are the winner</h1>:null}
            
             <div className="images">
                {
                    images
                    .map((image) => {
                        return(
                            <div key={image.id} className={image.isFlipped ? "image" : "image-blank"} name={image.name}
                            style={{background:`url(${image.pic})`}}  onClick={() =>
                                !image.isFlipped&&!this.state.processing &&
                                this.showImage({ id: image.id, mid: image.mid }) } />
                        )
                    })
}
            </div>
            </>
           
        )
    }
}

