# Plan de tests — Auth Login

## TC-001
**Description** : Connexion réussie avec identifiants valides  
**Entrée** : `{ "email": "user@mail.com", "password": "admin" }`  
**Résultat attendu** : 200 OK + retour d’un token et objet user

---

## TC-002
**Description** : Échec si l’email est inconnu  
**Entrée** : `{ "email": "ghost@mail.com", "password": "admin" }`  
**Résultat attendu** : 401 Unauthorized + message d’erreur

---

## TC-003
**Description** : Échec si le mot de passe est incorrect  
**Entrée** : `{ "email": "user@mail.com", "password": "wrong" }`  
**Résultat attendu** : 401 Unauthorized + message d’erreur

---

## TC-004
**Description** : Échec si des champs obligatoires sont manquants  
**Entrée** : `{ "email": "user@mail.com" }`  
**Résultat attendu** : 400 Bad Request + message "required"



---
**Couverture réalisée** : ces cas sont implémentés dans `tests/integration/auth.login.test.js` avec des mocks de la base de données et de bcrypt.  
