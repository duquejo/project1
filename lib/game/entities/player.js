ig.module(
  'game.entities.player'
)
.requires(
  'impact.entity'
)
.defines( function(){

  // Create your own entity, subclassed from ig.Enitity
  EntityPlayer = ig.Entity.extend({

    // Set some of the properties
    collides: ig.Entity.COLLIDES.ACTIVE,
    // type: ig.Entity.TYPE.A,
    // checkAgainst: ig.Entity.TYPE.B,

    size: {x: 32, y: 40},
    // health: 50,
    
    // Load an animation sheet
    animSheet: new ig.AnimationSheet( 'media/player.png', 32, 40 ),
    
    init: function( x, y, settings ) {
      this.parent( x, y, settings );

      this.addAnim( 'idle', 0.5, [ 69 ] );
      this.addAnim( 'walkTop', 0.1, [ 0, 1, 2, 1 ] );
      this.addAnim( 'walkRight', 0.1, [ 34, 35, 36, 35 ] );
      this.addAnim( 'walkDown', 0.1, [ 68, 69, 70, 69 ] );
    },
    
    update: function() {

      if( ig.input.state('up') ) {
        this.accel.y = -50;
        // this.vel.y = -50;
        this.currentAnim = this.anims.walkTop;
      } 
      else if( ig.input.state('down') ) {
        this.accel.y = 50;
        this.currentAnim = this.anims.walkDown;
      }
      else if( ig.input.state('left') ) {
        this.accel.x = -50;
        this.currentAnim = this.anims.walkRight;
        this.anims.walkRight.flip.x = true;
      }
      else if( ig.input.state('right') ) {
        this.accel.x = 50;
        this.currentAnim = this.anims.walkRight;
        this.anims.walkRight.flip.x = false;
      }
      else {
        this.vel.y = this.vel.x = 0;
        this.accel.x = this.accel.y = 0;
        this.currentAnim = this.anims.idle;
      }
      
      // Move
      this.parent(); 
    }
  });

});