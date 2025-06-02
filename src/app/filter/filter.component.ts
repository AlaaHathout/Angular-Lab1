import { Component } from '@angular/core';

@Component({
  selector: 'app-filter',
  standalone: false,
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {
  selectedCategory: string = 'All';
  searchTitle: string = '';
  maxPrice: string = '';

  currentCategory: string = 'All';
  currentTitle: string = 'None';
  currentPrice: string = 'None';

  applyFilters() {
    this.currentCategory = this.selectedCategory;
    this.currentTitle = this.searchTitle.trim() || 'None';
    this.currentPrice = this.maxPrice.toString() || 'None';
  }
}