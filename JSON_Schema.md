JSON Sentence Schema
----

### Example Sentence
```json
{
  "incorrect_sentence": "He is over there, turning in his homework.",
  "incorrect_terms": [
    "He",
    "is",
    "his"
  ],
  "correct_sentence": "They are over there, turning in their homework.",
  "correct_terms": [
    "They",
    "are",
    "their"
  ]
}
```

### Sentence Schema
```json
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    "incorrect_sentence": {
      "type": "string"
    },
    "incorrect_terms": {
      "type": "array",
      "items": 
        {
          "type": "string"
        }
    },
    "correct_sentence": {
      "type": "string"
    },
    "correct_terms": {
      "type": "array",
      "items": 
        {
          "type": "string"
        }
    }
  },
  "required": [
    "incorrect_sentence",
    "incorrect_terms",
    "correct_sentence",
    "correct_terms"
  ]
}
```