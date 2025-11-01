Feature: Visit website the book house 

    As user, I access the homepage visible header 

    Scenario: Visit website
        Given the user visit homepage
        When the user enter the contact sections 
        And the user must fill in the name field "Mar Capti"
        And the user must fill in the email "mar@hotmail.com"
        And the user must enter the subject "Informacion"
        And the user enters the following message "Deseo toda la informacion para la inscripcion"

