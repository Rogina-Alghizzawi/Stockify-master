import { Component, OnInit } from '@angular/core';
import { InventoryAnalyticsService } from '../../Services/inventory-analytics.service';
import { ChartData, ChartOptions } from 'chart.js';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-inventory-analytics',
  templateUrl: './inventory-analytics.component.html',
  styleUrls: ['./inventory-analytics.component.css']
})
export class InventoryAnalyticsComponent implements OnInit {

  stockCategoryChartData: ChartData<'bar'> = { labels: [], datasets: [] };
  stockCategoryChartOptions: ChartOptions<'bar'> = {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          color: '#0f172a' // Legend text color
        }
      }
    },
    scales: {
      x: {
        ticks: {
          color: '#0f172a' // X-axis label color
        }
      },
      y: {
        ticks: {
          color: '#0f172a' // Y-axis label color
        }
      }
    }
  };

  turnoverChartData: ChartData<'bar'> = { labels: [], datasets: [] };

  demandChartData: ChartData<'pie'> = {
    labels: ['High', 'Moderate', 'Low'],
    datasets: [{ data: [] }]
  };

  demandChartOptions: ChartOptions<'pie'> = {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          color: '#150578' // Legend label color for pie
        }
      }
    }
  };

  leftUserCount: number = 0;
  totalUserCount: number = 0;
  activeusers: number = 0;
  reportData: any[] = [];

  constructor(
    private analyticsService: InventoryAnalyticsService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.loadStockCategoryChart();
    this.loadInventoryReport();

    this.userService.getLeftUsersCount().subscribe(count => {
      this.leftUserCount = count;
    });

    this.analyticsService.getActiveUsers().subscribe(count => {
      this.activeusers = count;
    });

    this.userService.getUserCount().subscribe(count => {
      this.totalUserCount = count;
    });
  }

  loadStockCategoryChart(): void {
    this.analyticsService.getStockCategoryDistribution().subscribe(data => {
      const labels = data.map(d => d.category);
      const quantities = data.map(d =>
        d.products.reduce((sum: number, prod: any) => sum + prod.quantity, 0)
      );

      this.stockCategoryChartData = {
        labels: labels,
        datasets: [
          {
            label: 'Stock Quantity by Category',
            data: quantities
          }
        ]
      };
    });
  }

  loadInventoryReport(): void {
    this.analyticsService.getInventoryReport().subscribe(data => {
      this.reportData = data;

      // Turnover Rate Chart
      this.turnoverChartData = {
        labels: data.map(d => d.productName),
        datasets: [
          {
            label: 'Turnover Rate',
            data: data.map(d => d.turnoverRate)
          }
        ]
      };

      // Demand Pattern Pie Chart
      const high = data.filter(d => d.demandPattern === 'High').length;
      const moderate = data.filter(d => d.demandPattern === 'Moderate').length;
      const low = data.filter(d => d.demandPattern === 'Low').length;

      this.demandChartData = {
        labels: ['High', 'Moderate', 'Low'],
        datasets: [
          {
            data: [high, moderate, low],
            label: 'Demand Distribution'
          }
        ]
      };
    });
  }
}
