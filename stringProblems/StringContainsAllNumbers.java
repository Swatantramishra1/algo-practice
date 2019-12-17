import java.util.HashSet;
import java.util.*;

public class StringContainsAllNumbers {


    private static boolean checkContainsAllNumbers(String s) {
        Set<Integer> set = new HashSet<>();
        for (int i = 0; i < 9; i++) {
            set.add(i);
        }

        for (int i=0; i<s.length(); i++) {
            char c = s.charAt(i);
            try {
                Integer digit = Integer.parseInt(c+"");
                if (set.contains(digit)) {
                    set.remove(digit);
                    if (set.isEmpty()) {
                        return true;
                    }
                }
            } catch (Exception e) {
                continue;
            }
        }


        return false;
    }

    public static void main(String[] args) {
        String s = "Geeks12345for6908";
        System.out.println("String Conatins all integer = "+ checkContainsAllNumbers(s));

    }
}
