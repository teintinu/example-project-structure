Feature: Sample test

Scenario: A
  Given obj is instance of Class1(1)
  When I call obj.inc() 
  Then obj.prop1 must be 2

Scenario: B
  Given obj is instance of Class1(3)
  When I call obj.inc() 
  Then obj.prop1 must be 4
 
Scenario Outline: C
  Given obj is instance of Class1(<value>)
  When I call obj.inc() 
  Then obj.prop1 must be <next>
 
  Examples:
  | value | next   |
  | 10    | 11     |
  | 20    | 21     |
