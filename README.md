# Get all todoList

**Method** : `GET`

**URL** : `https://6674179975872d0e0a950e53.mockapi.io/todoList`

## Success Responses

**Code** : `200 OK`

**Content example** :

```json
[
  {
    "task": "Homework",
    "status": "ready",
    "id": "1"
  },
  {
    "task": "Write report",
    "status": "ready",
    "id": "2"
  },
  {
    "task": "JavaScript Exam",
    "status": "ready",
    "id": "3"
  },
  {
    "task": "Study",
    "status": "On hold",
    "id": "4"
  },
  {
    "task": "Attend meeting",
    "status": "On hold",
    "id": "5"
  },
  {
    "task": "JavaScript Exam",
    "status": "On hold",
    "id": "6"
  },
  ...
]
```





# Get one todoList

**Method** : `GET`

**URL** : `https://6674179975872d0e0a950e53.mockapi.io/todoList/:id`

**URL Parameters** : `id=[int]` where `id` is the ID of a task list

## Success Response

**Code** : `200 OK`

**Content example** :

```json
{
  "task": "Homework",
  "status": "ready",
  "id": "1"
}
```





# **Delete** todoList

**Method** : `DELETE`

**URL** : `https://6674179975872d0e0a950e53.mockapi.io/todoList/:id`

**URL Parameters** : `id=[int]` where `id` is the ID of a task list

**HEADER Parameters** :  `Required`

```json
{
  "Content-Type": "application/json"
}
```


## Success Response

**Code** : `200 OK`

**Content example** :

```json
{
  "task": "JavaScript Exam",
  "status": "ready",
  "id": "3" 
}
```





# **Post** one todoList

**Method** : `POST`

**URL** : `https://6674179975872d0e0a950e53.mockapi.io/todoList`

**HEADER Parameters** :  `Required`

```json
{
  "Content-Type": "application/json"
}
```

**BODY Parameters** : `Required`

```json
{
  "task": "string",
  "status": "string",
}
```

`task=[string]` where `task` is the NAME of a task.

`status=[string]` where `status` is the STATUS of the task, which are `ready` = `Ready` or `On hold` = `On hold`


## Success Response

**Code** : `201 OK`

**Content example** :

```json
{
  "task": "JavaScript Exam",
  "status": "ready",
  "id": "3"
 }
```





# **Put** todoList

**Method** : `PUT`

**URL** : `https://6674179975872d0e0a950e53.mockapi.io/todoList/:id`

**URL Parameters** : `id=[int]` where `id` is the ID of a task list

**HEADER Parameters** :  `Required`

```json
{
  "Content-Type": "application/json"
}
```

**BODY Parameters** : `Required`

```json
{
  "task": "string",
  "status": "string",
}
```

`task=[string]` where `task` is the NAME of a task.

`status=[string]` where `status` is the STATUS of the task, which are `ready` = `Ready` or `On hold` = `On hold`


## Success Response

**Code** : `202 OK`

**Content example** :

**Before** :

```json
{
  "task": "JavaScript Exam",
  "status": "ready",
  "id": "3" 
}
```
**After** :

```json
{
  "task": "JavaScript Exam",
  "status": "On hold",
  "id": "3"
 }
```
