/*
Copyright (c) 2013 Technicat, LLC. All Rights Reserved. MIT License.
http://github.com/technicat/LearnUnity
*/

// HyperBowl-style bowling ball control

#pragma strict

var mousepowerx:float = 1.0;
var mousepowery:float = 1.0;

var maxVelocity:float=400.0;

private var forcey:float=0;
private var forcex:float=0;

private var isRolling:boolean=false;

function Update() {
	forcex = mousepowerx*Input.GetAxis("Mouse X")/Time.deltaTime;
	forcey = mousepowery*Input.GetAxis("Mouse Y")/Time.deltaTime;
}

function FixedUpdate() {
	if (isRolling && rigidbody.velocity.sqrMagnitude<maxVelocity) {
		rigidbody.AddForce(forcex,0,forcey);
	}
}

function OnCollisionEnter(collider:Collision) {
	if (collider.gameObject.tag == "Floor") {
		isRolling = true;
	}
}

function OnCollisionStay(collider:Collision) {
	if (collider.gameObject.tag == "Floor") {
		isRolling = true;
	}	
}

function OnCollisionExit(collider:Collision) {
	if (collider.gameObject.tag == "Floor") {
		isRolling = false;
	}
}

