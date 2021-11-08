import java.math.BigInteger;

public class factorial {
    static int factorial(int n) {
        int res = 1, i;
        for (i = 2; i <= n; i++)
            res *= i;
        return res;
    }

    static long factorialRecursion(int n) {
        if (n == 0)
            return 1;

        return n * factorial(n - 1);
    }

    static void extralLongFactorial(int n) {
        BigInteger x = BigInteger.valueOf(n);
        n = n - 1;
        while (n > 0) {
            x = x.multiply(BigInteger.valueOf(n));
            n = n - 1;
        }

        System.out.println("Factorial BigInteger: " + x.toString());
    }

    public static void main(String args[]) {
        Factorial obj = new Factorial();
        int num = 25;
        System.out.println("Factorial of " + num + " is " + obj.factorial(num));
        System.out.println("FacIterative: " + factorial(25));
        System.out.println("facRecursive: " + factorialRecursion(25));
        // System.out.println("facRecursive: " + extralLongFactorial(25));
        extralLongFactorial(25);
    }
}

class Factorial {

    int factorial(int n) {

        // single line to find factorial
        return (n == 1 || n == 0) ? 1 : n * factorial(n - 1);

    }
}