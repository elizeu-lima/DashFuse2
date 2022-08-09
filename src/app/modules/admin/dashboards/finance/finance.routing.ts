import { Route } from '@angular/router';
import { FinanceComponent } from 'app/modules/admin/dashboards/finance/finance.component';
import { FinanceResolver } from 'app/modules/admin/dashboards/finance/finance.resolvers';

 const financeRoutes: Route[] = [
    {
        path     : '',
        component: FinanceComponent,
        resolve  : {
            data: FinanceResolver
        }
    }
];
