# Created by nibo at 2015-06-03
Feature: Administrative functions and interface
  The admin web backend is basically just a web facing API frontend, broker restarting and similar features are actually
  tested in the broker library implementation instead. Here, mostly UI-supporting functionality is tested


  Scenario: Starting broker and use the API to shut everything down
    Given the broker is started
    And we wait 2 seconds
    And it is it possible to register an admin at the broker
    And the broker is told to restart using the API
    And we wait 4 seconds
    And it is it possible to register an admin at the broker
    And the broker is told to stop using the API
    And we wait 2 seconds
    And a get environment request should fail

"""