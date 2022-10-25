package berisha.project.security;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;


//@Configuration
//@EnableWebSecurity
public class WebSecurityConfig{
    protected void configure(HttpSecurity http) throws Exception {
        http.cors();
        http.csrf().disable();
        /*http.httpBasic().and()
                .authorizeRequests()
                .antMatchers("/**")
                .permitAll();*/
    }
}