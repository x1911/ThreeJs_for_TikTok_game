
let i

export class Main{
    constructor( ){

        this.renderer = new THREE.WebGLRenderer({ 
            canvas: canvas, 

         });
       
         this._arr = []
    
        this.init();
        this.animate()
    }

    init(){
         console.log('start three') 
        const scene = new THREE.Scene();
        scene.background = new THREE.Color( 0x606060 );

        const camera = new THREE.PerspectiveCamera( 50, window.innerWidth / window.innerHeight, 1, 1000 );
        camera.position.set( 0, 150, 300 );
        camera.lookAt( new THREE.Vector3() )
        scene.add( camera );
 
        this.scene = scene
        this.camera = camera
    }

    async start(){

    } 
    
    
    animate() {

        requestAnimationFrame( this.animate.bind(this) )

        this.render();
      

    }

    render() {

        for( i of this._arr ){
            i()
        }

        this.renderer.render( this.scene, this.camera )

    }

}