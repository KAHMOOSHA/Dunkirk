# Attacks

## What Is a Man-in-the-Middle Attack?

A man-in-the-middle attack is a type of eavesdropping attack, where attackers interrupt an existing conversation or data transfer. After inserting themselves in the "middle" of the transfer, the attackers pretend to be both legitimate participants. This enables an attacker to intercept information and data from either party while also sending malicious links or other information to both legitimate participants in a way that might not be detected until it is too late.
![](https://i.imgur.com/Rp8WUFo.png)

#### Key Concepts of a Man-in-the-Middle Attack:
1. Are a type of session hijacking
2. Involve attackers inserting themselves as relays or proxies in an ongoing, legitimate conversation or data transfer
3. Exploit the real-time nature of conversations and data transfers to go undetected
4. Allow attackers to intercept confidential data
5. Allow attackers to insert malicious data and links in a way indistinguishable from legitimate data





## Cross Site Scripting (XSS)
Cross-site scripting (also known as XSS) is a web security vulnerability that allows an attacker to compromise the interactions that users have with a vulnerable application. It allows an attacker to circumvent the same origin policy, which is designed to segregate different websites from each other. Cross-site scripting vulnerabilities normally allow an attacker to masquerade as a victim user, to carry out any actions that the user is able to perform, and to access any of the user's data. If the victim user has privileged access within the application, then the attacker might be able to gain full control over all of the application's functionality and data.

![XSS](https://media.geeksforgeeks.org/wp-content/uploads/20190516152959/Cross-Site-ScriptingXSS.png)


and here's the three types of XSS:
### Reflected XSS
this type sends a response directly to the server then the servers apply your changes with the bad response on the website.
lets assume we have the following code inside your website:

```javascript= 
const nameInput = document.querySelector(input).value
```
and then if the user inputs this inside the input value you actually will get an alert with the written
```javascript
<script> alert("Im a hacker")</script>
``` 
your response would be like:
```
https://gazaskygeeks.com?message=<script>/*+alert()"im a hacker"+*/</script>
<p>Status: <script>/*+alert()"im a hacker"+*/</script></p>
```

and that's why it's called reflected becuase it already entered your sever and reflected from it.

### Stored XSS
this type could be more haarmful from the previous one, becuase the input is presisted and stored in the database and affects everyone who has a page affected from your input 

#### e.g.
If the input were stored like in a public post comments, everytime a user load the comments he will get an alert, i will leave a real life video to get it :rolling_on_the_floor_laughing: 
[Twitch Streamer Gets Alerts](https://www.youtube.com/watch?v=2GtbY1XWGlQ)

### DOM XSS
And this one happens entirely in the client side, and when you access a code in the dom you can ultimately excute javascript then.

```javascript= 
const nameInput = document.querySelector(input).value
document.querySelector(h1).innerHTML = `hi ${nameInput}`
```





# Cross site request forgery (CSRF)
![](https://i.imgur.com/CZWCq8p.png)

## What is Cross site request forgery?
Cross-site request forgery (also known as CSRF) is a web security vulnerability that allows an attacker to induce users to perform actions that they do not intend to perform. It allows an attacker to partly circumvent the same origin policy, which is designed to prevent different websites from interfering with each other.
## What is the impact of a CSRF attack?
In a successful CSRF attack, the attacker causes the victim user to carry out an action unintentionally. For example, this might be to change the email address on their account, to change their password, or to make a funds transfer. Depending on the nature of the action, the attacker might be able to gain full control over the user's account. If the compromised user has a privileged role within the application, then the attacker might be able to take full control of all the application's data and functionality.
## How does CSRF work?
Suppose an application contains a function that lets the user change the email address on their account. When a user performs this action, they make an HTTP request like the following:
```javascript= 
POST /email/change HTTP/1.1
Host: vulnerable-website.com
Content-Type: application/x-www-form-urlencoded
Content-Length: 30
Cookie: session=yvthwsztyeQkAPzeQ5gHgTvlyxHfsAfE

email=wiener@normal-user.com
```
This meets the conditions required for CSRF:

- The action of changing the email address on a user's account is of interest to an attacker. Following this action, the attacker will typically be able to trigger a password reset and take full control of the user's account.
- The application uses a session cookie to identify which user issued the request. There are no other tokens or mechanisms in place to track user sessions.
- The attacker can easily determine the values of the request parameters that are needed to perform the action.

With these conditions in place, the attacker can construct a web page containing the following HTML:
```javascript
<html>
    <body>
        <form action="https://vulnerable-website.com/email/change" method="POST">
            <input type="hidden" name="email" value="pwned@evil-user.net" />
        </form>
        <script>
            document.forms[0].submit();
        </script>
    </body>
</html>
```
- If a victim user visits the attacker's web page, the following will happen:
The attacker's page will trigger an HTTP request to the vulnerable web site.
- If the user is logged in to the vulnerable web site, their browser will automatically include their session cookie in the request (assuming SameSite cookies are not being used).
- The vulnerable web site will process the request in the normal way, treat it as having been made by the victim user, and change their email address.



# How to defend agianst each attak?
 In this section we'll showcase how to protect your website against:
 
 ## Man In The Middle (MITM):
 The first step to solving a problem is to identify the problem, but in the case of detecting Man In The Middle Attacks can be difficult if you aren't actively searching to determine if your communications have been intercepted.
      
### Best practices to prevent man-in-the-middle attacks.
    
- Strong WEP/WAP Encryption Access Points

    Having a strong encryption mechanism on wireless access points prevents unwanted users from joining your network just by being nearby. A weak encryption mechanism can allow an attacker to brute-force his way into a network and begin man-in-the-middle attacking. The stronger the encryption implementation, the safer.

- Vertuial Private Network (VPN)

    VPNs can be used to create a secure environment for sensitive information within a local area network. They use key-based encryption to create a subnet for secure communication. This way, even if an attacker happens to get on a network that is shared, he will not be able to decipher the traffic in the VPN.
    
- Force HTTPS
    
    HTTPS can be used to securely  over HTTP using public-private key exchange. This prevents an attacker from having any use of the data he may be sniffing. 

## Cross Site Scripting (XSS) how to defend:

*  Preventing cross-site scripting is trivial in some cases but can be much harder depending on the complexity of the application. In general, effectively preventing XSS vulnerabilities is likely to involve a combination of the following measures:

- Filter input on arrival: whenever a user input is recived
  filter the input as strict as possible based on what you expect a valid input.
  
- Endoce data on output: At the point where user-controllable data is output in HTTP responses, encode the output to prevent it from being interpreted as active content.

- Use appropriate response headers: To prevent XSS in HTTP responses that aren't intended to contain any HTML or JavaScript, you can use the Content-Type and X-Content-Type-Options headers to ensure that browsers interpret the responses in the way you intend.

- Content Security Policy: As a last line of defense, you can use Content Security Policy (CSP) to reduce the severity of any XSS vulnerabilities that still occur.

## Cross Site Request Forgery (CSRF):

- The most robust way to defend against CSRF attacks is to include a CSRF token within relevant requests. The token should be:

    - Unpredictable with high entropy, as for session tokens in general.
    - Tied to the user's session.
    - Strictly validated in every case before the relevant action is executed.

    
* CSRF token is tied to a non-session cookie
     In a variation on the preceding vulnerability, some applications do tie the CSRF token to a cookie, but not to the same cookie that is used to track sessions. This can easily occur when an application employs two different frameworks, one for session handling and one for CSRF protection, which are not integrated together:

        POST /email/change HTTP/1.1
        Host: vulnerable-website.com
        Content-Type: application/x-www-form-urlencoded
        Content-Length: 68
        Cookie: session=pSJYSScWKpmC60LpFOAHKixuFuM4uXWF; csrfKey=rZHCnSzEp8dbI6atzagGoSYyqJqTz5dv

        csrf=RhV7yQDO0xcq9gLEah2WVbmuFqyOq7tY&email=wiener@normal-user.com

