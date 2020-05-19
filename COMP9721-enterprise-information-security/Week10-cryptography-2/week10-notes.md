# Week10 Cryptography 2 (Algorithm & Bit Operations)

- [Week10 Cryptography 2 (Algorithm & Bit Operations)](#week10-cryptography-2-algorithm--bit-operations)
  - [Classes of Algorithms](#classes-of-algorithms)
    - [Symmetric](#symmetric)
    - [Asymmetric](#asymmetric)
    - [Asymmetric Algorithm Examples](#asymmetric-algorithm-examples)
      - [RSA](#rsa)
      - [Elgamal](#elgamal)
  - [Issues in Cryptography](#issues-in-cryptography)
  - [Solution Options](#solution-options)
  - [Applications of Cryptography](#applications-of-cryptography)

---

## Classes of Algorithms

### Symmetric

- Secrete key
- Suitable for small number of participants
- Different algorithms for encryption and decryption

### Asymmetric

- Public-key, private-key
- based on the existence of key-pairs which are closely related
- Process involves generating a key pair for encryption, publishing the public key which is used to apply to the message of the third party encryption algorithm
- When message is received an encryption algorithm is used with private key to decrypt the message

### Asymmetric Algorithm Examples

#### RSA

- Developed by Rivest, Shamir, Adleman in 1977
- Based on use of large prime numbers, modulus
  arithmetic, and straight-forward, but clever maths

#### Elgamal

- Developed by Taher Elgamal
- Incorporates some randomisation into the encryption process, but also uses primes and modulus arithmetic
- Security of the system is based on the (present)
  difficulty of solving the discrete logarithm problem, which is a problem believed to be computationally
  difficult.

## Issues in Cryptography

- Difficulty of computation
- Time involved to encrypt and decrypt
- Maintenance of keys for algorithms
- Differing protocols

## Solution Options

- Ensuring encryptions is used for sensitive communications
- Encrypting stored data
- Time involved to encrypt and decrypt
- Partial encryption, encrypting parts of a data set seen in digital signatures
- **Digital Signatures**,Primary idea is to attach a small encryption segment to a plaintext message. In addition to authenticating the sender, this also acts as validation for non-repudiation.
- **Message Digests (MD)**, used to provide
  message authentication. Often seen with download libraries
- **Message Authentication Codes (MAC)**, key-based has function used for authentication. Not interested in the decryption, just that the re-encrypted hash value matches

## Applications of Cryptography

- All serious forms of communications protocols:
  - VPN – creation of tunnels for encrypted traffic. Implements private encrypted messaging over public infrastructure
  - SSL/TLS – uses both symmetric and asymmetric encryption. Asymmetric to exchange shared secret key (as part of the handshake process); Symmetric to transfer data
  - S/FTP – makes use of underlying SSH2 protocol
  - WEP – not considered sufficiently effective any more
  - WPA/WPA2 – meets 802.11i WLAN security specification
