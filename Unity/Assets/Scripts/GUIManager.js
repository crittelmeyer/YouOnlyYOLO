#pragma strict

private var healthBarLength : float;
private var currentHealth : int = 100;
private var maxHealth : int = 100;

function Start() {
	healthBarLength = Screen.width / 2;
}

function Update() {
	AdjustCurrentHealth(0);
}

function OnGUI() {
	GUI.Box(new Rect(10, 10, healthBarLength, 20), currentHealth.ToString() + "/" + maxHealth.ToString());
}

function AdjustCurrentHealth (adj : int) {
   currentHealth += adj;
   
   if (currentHealth < 0) currentHealth = 0;
   
   if (currentHealth > maxHealth) currentHealth = maxHealth;
   
   if (maxHealth < 1) maxHealth = 1;
   
   healthBarLength = (Screen.width / 2) * (currentHealth / maxHealth);
}