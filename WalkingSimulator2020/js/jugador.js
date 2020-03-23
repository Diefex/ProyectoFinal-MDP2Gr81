function Player(){
	this.x = 1600;
	this.y = 900;
    this.img = [$("#pu0")[0], $("#pd0")[0], $("#pl0")[0], $("#pr0")[0]];
    this.map = $("#map")[0];
	this.Nsprite = 0;
	this.vida = 100;
	this.puntos = 0;
	this.velocidad = 5;
	
	this.dibujar = function(ctx,x,y){
        var img = this.img[this.Nsprite];
        ctx.drawImage(this.map,x-this.x,y-this.y);
        ctx.drawImage(img, x-17, y-26);
		ctx.save();
		ctx.restore();
	}
	
	this.actualizar = function(accion){
		if(accion=="up"){
			this.y -= this.velocidad;
			this.Nsprite = 0;
		}
		if(accion=="down"){
			this.y += this.velocidad;
			this.Nsprite = 1;
		}
		if(accion=="left"){
			this.x -= this.velocidad;
			this.Nsprite = 2;
		}
		if(accion=="right"){
			this.x += this.velocidad;
			this.Nsprite = 3;
		}

	}
	
	this.colision = function(x,y){
		var distancia=Math.sqrt( Math.pow( (x-this.x), 2)+Math.pow( (y-this.y),2));
		if(distancia>this.img[this.Nsprite].width)
		   return false;
		else
		   return true;	
	}
}