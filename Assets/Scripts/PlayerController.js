#pragma strict

public var speed: float;
private var rb: Rigidbody;
private var count: int;
public var countText: UnityEngine.UI.Text;
public var winText: UnityEngine.UI.Text;

function Start () {
    rb = GetComponent.<Rigidbody>();
    count = 0;
    winText.text = "";
    countText.text = "Count: 0"; 
    SetCountText();

}

function FixedUpdate () {
	var moveHorizontal = Input.GetAxis('Horizontal');
    var moveVertical = Input.GetAxis('Vertical');
    var movement = Vector3(moveHorizontal, 0.0, moveVertical);
    rb.AddForce(movement * speed);
	}
   // Destroy everything that enters the trigger

function OnTriggerEnter (other : Collider) {
        if(other.gameObject.CompareTag ('Pick Up')) {

        	count = count + 1;
        	other.gameObject.SetActive (false);
        	SetCountText();
        }
}
function SetCountText(){
	countText.text = "Count:  "+ count.ToString ();
	if(count >=12){
		winText.text="You Win";
	}
}