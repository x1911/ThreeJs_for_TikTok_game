

export class Project{
    constructor(){
        this.init()
    }

    init(){
        const geo = new THREE.IcosahedronBufferGeometry( 50, 1 );
        const mat = new THREE.MeshBasicMaterial({
            color: 0x0055cc,
        })
        this.mesh = new THREE.Mesh( geo, mat )

        DB.scene.scene.add( this.mesh )

        DB.scene._arr.push( this.update.bind(this) )
    }

    update(){
        this.mesh.rotation.y += 0.01
    }
}